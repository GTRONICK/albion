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

  locations: string[] = LOCATIONS;
  qualities: GenericModel[] = QUALITIES;
  tiers: GenericModel[] = TIERS;
  enchantments: GenericModel[] = ENCHANTMENTS;
  
  marketPrices: MarketResponse[] = [];
  searchTerms: string[] = [];
  gobForm: FormGroup = new FormGroup({});
  searching$ = new BehaviorSubject<boolean>(false);
  searchingStatus$ = this.searching$.asObservable();
  controlValueChangeSubs: Subscription[] = [];

  choosenQuality: number = 0;
  choosenEnchanments: number = 4;
  choosenTier: number = 0;
  chosenCities: string[] = ['All'];

  constructor(
    private albionService: AlbionService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.initForm();
    this.initSubscriptions();
  }

  showToast(severity: string, title: string, message: string) {
    this.messageService.add({severity:severity, summary:title, detail:message});
  }

  initForm(): void {
    this.gobForm = this.fb.group({
      searchTerm: ['', Validators.required],
      quality: [],
      enchantments: [],
      tier: [],
      city: [],
    });
  }

  initSubscriptions(): void {
    this.controlValueChangeSubs.push(this.gobForm.controls.quality.valueChanges.subscribe( value => {
      this.choosenQuality = value;
      this.getItemPrice(this.gobForm.controls.searchTerm.value);
    }));

    this.controlValueChangeSubs.push(this.gobForm.controls.enchantments.valueChanges.subscribe( value => {
        this.choosenEnchanments = value;
        this.getItemPrice(this.gobForm.controls.searchTerm.value);
    }));

    this.controlValueChangeSubs.push(this.gobForm.controls.tier.valueChanges.subscribe( value => {
        this.choosenTier = value;
        this.getItemPrice(this.gobForm.controls.searchTerm.value);
    }));

    this.controlValueChangeSubs.push(this.gobForm.controls.city.valueChanges.subscribe( value => {
        this.chosenCities = [...[]];
        this.chosenCities.push(value);
        this.getItemPrice(this.gobForm.controls.searchTerm.value);
    }));
  }

  disableSubscriptions(): void {
    this.controlValueChangeSubs.forEach( subs => {
      subs.unsubscribe;
    });

    this.controlValueChangeSubs = [...[]];
  }

  getItemPrice(itemName: string): void {

    
    let itemUidList = [];
    
    if ( itemName && itemName.length > 0 ) {
      this.marketPrices.splice(0, this.marketPrices.length);
      this.searching$.next(true);
      this.disableFields();

      itemUidList = this.albionService.getItemUniqueName(itemName);
      itemUidList = this.filterByEnchanments(itemUidList);
      itemUidList = this.filterByTier(itemUidList);
      console.log(itemUidList);
      

      if ( itemUidList.length > 0 ) {
        this.albionService.getItemPrice(this.chosenCities, itemUidList, this.choosenQuality)
        .pipe(
          map( data => {
            data.forEach(element => {
              element.qualityName = this.getQualityName(element.quality);
              element.enchantments = this.getEnchantmentCount(element.item_id);
            });
            return data.filter( item => item.sell_price_max > 0);
          })
        ).subscribe( elements => {
          this.marketPrices = [...elements];
          this.searching$.next(false);
          this.enableFields();
        }, error => {
          console.error(error);
          this.showToast('error', 'Ops!','No items found');
        });
      } else {
        this.showToast('warn', 'Ops!','No items found');
        this.enableFields();
        this.searching$.next(false);
      }
    }
  }

  disableFields(): void {
    this.gobForm.controls.quality.disable({emitEvent: false});
    this.gobForm.controls.enchantments.disable({emitEvent: false});
    this.gobForm.controls.tier.disable({emitEvent: false});
    this.gobForm.controls.city.disable({emitEvent: false});
  }

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
    return this.albionService.getItemLocalizedName(uniqueName);
  }

  /**
   * Extracts the items which have the chosen enchantments
   * from the given items array.
   * @param itemUIds 
   * @returns string[]
   */
  filterByEnchanments(itemUIds: string[]): string[] {
    if ( this.choosenEnchanments < 4 ) {

      if ( this.choosenEnchanments === 0 ) {
        return itemUIds.filter( item => {
          return !item.includes('@');
        });
      }

      return itemUIds.filter( item => {
        return this.getEnchantmentCount(item) === this.choosenEnchanments;
      });
    } else return itemUIds;
  }

  filterByTier(itemUIds: string[]): string[] {
    if ( this.choosenTier > 0 ) {
      let currentTier = `T${this.choosenTier}`;

      return itemUIds.filter( item => {
        return item.split(`_`)[0] && item.split(`_`)[0] === currentTier;
      });
    } else return itemUIds;
  }

  getQualityName(quality: number | string): string {
    let lobArray = QUALITIES.filter( (item) => item.value === quality );
    return lobArray.length > 0 ? lobArray[0].name : '';
  }

  getEnchantmentCount(itemUid: string): number {
    return itemUid.split('@')[1] ? Number(itemUid.split('@')[1]) : 0;
  }

  ngOnDestroy(): void {
    this.disableSubscriptions();
    
  }
}

