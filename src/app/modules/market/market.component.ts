import { MessageService } from 'primeng/api';
import { ENCHANTMENTS, TIERS, LOCATIONS, QUALITIES, GenericModel } from '../../models/generic.model';
import { MarketResponse } from '../../models/marketResponse.model';
import { AlbionService } from '../../services/albion.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit, OnDestroy {

  gobLocations: string[] = LOCATIONS;
  gobQualities: GenericModel[] = QUALITIES;
  gobTiers: GenericModel[] = TIERS;
  gobEnchantments: GenericModel[] = ENCHANTMENTS;
  
  gobSearchTerms: string[] = [];
  gobForm: FormGroup = new FormGroup({});
  gobSearching$ = new BehaviorSubject<boolean>(false);
  gobSearchingStatus$ = this.gobSearching$.asObservable();
  gobControlValueChangeSubs: Subscription[] = [];
  
  giChosenQuality: number = 0;
  giChosenEnchanments: number = 4;
  giChosenTier: number = 0;
  gobChosenCities: string[] = ['All'];
  gbIsLoading: boolean = false;
  
  gobMarketPrices: MarketResponse[] = [];

  constructor(
    private gobAlbionService: AlbionService,
    private gobFormBuilder: FormBuilder,
    private gobMessageService: MessageService
  ) { }

  ngOnInit(): void {

    this.initForm();
    this.initSubscriptions();
  }

  showToast(severity: string, title: string, message: string) {
    this.gobMessageService.add({severity:severity, summary:title, detail:message});
  }

  initForm(): void {
    this.gobForm = this.gobFormBuilder.group({
      searchTerm: ['', Validators.required],
      quality: [],
      enchantments: [],
      tier: [],
      city: [],
    });
  }

  initSubscriptions(): void {
    this.gobControlValueChangeSubs.push(this.gobForm.controls.quality.valueChanges.subscribe( value => {
      this.giChosenQuality = value;
      this.getItemPrice(this.gobForm.controls.searchTerm.value);
    }));

    this.gobControlValueChangeSubs.push(this.gobForm.controls.enchantments.valueChanges.subscribe( value => {
        this.giChosenEnchanments = value;
        this.getItemPrice(this.gobForm.controls.searchTerm.value);
    }));

    this.gobControlValueChangeSubs.push(this.gobForm.controls.tier.valueChanges.subscribe( value => {
        this.giChosenTier = value;
        this.getItemPrice(this.gobForm.controls.searchTerm.value);
    }));

    this.gobControlValueChangeSubs.push(this.gobForm.controls.city.valueChanges.subscribe( value => {
        this.gobChosenCities = [...[]];
        this.gobChosenCities.push(value);
        this.getItemPrice(this.gobForm.controls.searchTerm.value);
    }));
  }

  disableSubscriptions(): void {
    this.gobControlValueChangeSubs.forEach( subs => {
      subs.unsubscribe;
    });

    this.gobControlValueChangeSubs = [...[]];
  }

  getItemPrice(itemName: string): void {

    let lobItemUidList = [];
    
    if ( itemName && itemName.length > 0 ) {
      this.gbIsLoading = true;
      this.gobMarketPrices.splice(0, this.gobMarketPrices.length);
      this.gobSearching$.next(true);
      this.disableFields();

      lobItemUidList = this.gobAlbionService.getItemUniqueName(itemName);
      lobItemUidList = this.filterByEnchanments(lobItemUidList);
      lobItemUidList = this.filterByTier(lobItemUidList);
      

      if ( lobItemUidList.length > 0 ) {
        this.gobAlbionService.getItemPrice(this.gobChosenCities, lobItemUidList, this.giChosenQuality)
        .pipe(
          map( data => {
            data.forEach(element => {
              element.qualityName = this.getQualityName(element.quality);
              element.enchantments = this.getEnchantmentCount(element.item_id);
            });
            return data.filter( item => item.sell_price_max > 0);
          })
        ).subscribe( elements => {
          this.gobMarketPrices = [...elements];
          this.gobSearching$.next(false);
          this.gbIsLoading = false;
          this.enableFields();
        }, error => {
          console.error(error);
          this.showToast('error', 'Ops!','No items found');
        });
      } else {
        this.showToast('warn', 'Ops!','No items found');
        this.enableFields();
        this.gobSearching$.next(false);
        this.gbIsLoading = false;
      }
    }
  }

  /**
   * Disable the search form fields
   */
  disableFields(): void {
    this.gobForm.controls.quality.disable({emitEvent: false});
    this.gobForm.controls.enchantments.disable({emitEvent: false});
    this.gobForm.controls.tier.disable({emitEvent: false});
    this.gobForm.controls.city.disable({emitEvent: false});
  }

  /**
   * Enable the search form fields
   */
  enableFields(): void {
    this.gobForm.controls.quality.enable({emitEvent: false});
    this.gobForm.controls.enchantments.enable({emitEvent: false});
    this.gobForm.controls.tier.enable({emitEvent: false});
    this.gobForm.controls.city.enable({emitEvent: false});
  }

  /**
   * Gets the common localized name for the specified item ID
   * @param uniqueName Unique item ID
   * @returns string
   */
  filterByName(uniqueName: string): string {
    return this.gobAlbionService.getItemLocalizedName(uniqueName);
  }

  /**
   * Extracts the items which have the chosen enchantments
   * from the given items array.
   * @param itemUIds 
   * @returns string[]
   */
  filterByEnchanments(itemUIds: string[]): string[] {
    if ( this.giChosenEnchanments < 4 ) {

      if ( this.giChosenEnchanments === 0 ) {
        return itemUIds.filter( item => {
          return !item.includes('@');
        });
      }

      return itemUIds.filter( item => {
        return this.getEnchantmentCount(item) === this.giChosenEnchanments;
      });
    } else return itemUIds;
  }

  /**
   * Extracts the items which have the chosen tier
   * from the given items array.
   * @param itemUIds 
   * @returns string[]
   */
  filterByTier(itemUIds: string[]): string[] {
    if ( this.giChosenTier > 0 ) {
      let currentTier = `T${this.giChosenTier}`;

      return itemUIds.filter( item => {
        return item.split(`_`)[0] && item.split(`_`)[0] === currentTier;
      });
    } else return itemUIds;
  }

  /**
   * Gets the localized name for the specified quality number
   * @param quality Quality value number
   * @returns The localized name for the given quality
   */
  getQualityName(quality: number | string): string {
    let lobArray = QUALITIES.filter( (item) => item.value === quality );
    return lobArray.length > 0 ? lobArray[0].name : '';
  }

  /**
   * Extract the item's enchantment count from its UID
   * @param itemUid Item's unique identifier
   * @returns number
   */
  getEnchantmentCount(itemUid: string): number {
    return itemUid.split('@')[1] ? Number(itemUid.split('@')[1]) : 0;
  }

  /**
   * Clear the filters
   */
  resetFilters(): void {
    this.gobForm.reset({emitEvent: false});
    this.giChosenQuality = 0;
    this.giChosenEnchanments = 4;
    this.giChosenTier = 0;
    this.gobChosenCities = ['All'];
    this.gbIsLoading = false;
    this.gobMarketPrices = [];
  }

  ngOnDestroy(): void {
    this.disableSubscriptions();
    
  }
}

