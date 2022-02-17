import { MarketResponse } from './../../../models/marketResponse.model';
import { LOCATIONS } from './../../../models/generic.model';
import { AlbionService } from './../../../services/albion.service';
import { map } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-best-place',
  templateUrl: './best-place.component.html',
  styleUrls: ['./best-place.component.css'],
})
export class BestPlaceComponent implements OnInit {

  gbIsLoading: boolean = false;
  giQuality: number = 0;
  gsItemUid: string = '';
  gsBestToSell: string = '';
  giSellPrice: number = 0;
  gsBestToBuy: string = '';
  giBuyPrice: number = 0;

  constructor(
    private gobAlbionService: AlbionService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private gobMessageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.giQuality = this.config.data.qualityNumber;
    this.gsItemUid = this.config.data.itemUid;
    this.getBestPlaces();
  }

  getBestPlaces(): void {

    this.gbIsLoading = true;
    this.gobAlbionService.getBestToSellBuy(this.gsItemUid, this.giQuality)
    .subscribe( result => {

      this.gbIsLoading = false;
      this.gsBestToSell = result.sellCity;
      this.gsBestToBuy = result.buyCity;
      this.giSellPrice = result.sellPrice;
      this.giBuyPrice = result.buyPrice;
      
    }, error => {
      console.error(error);
      this.showToast('error', 'Ops!','Item not found');
      this.gbIsLoading = false;
    });
  }

  showToast(severity: string, title: string, message: string) {
    this.gobMessageService.add({severity:severity, summary:title, detail:message});
  }

  getFlagImg(cityName: string): string {
    if ( !cityName.toLowerCase().includes('rest') ) {
      return 'assets/img/' + cityName.toLowerCase().trim().replace(' ', '') + '-flag.png'
    } else {
      return 'assets/img/no-flag.jpg'
    }
  }
}
