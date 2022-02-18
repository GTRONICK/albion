import { LOCATIONS } from './../models/generic.model';
import { ItemModel } from './../models/itemModel';
import { MarketResponse } from './../models/marketResponse.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemDataSource } from './ItemDB';
import { map } from 'rxjs/operators';
import { BestPlaceModel } from '../models/bestPlace.model';

@Injectable({
  providedIn: 'root'
})
export class AlbionService {

  constructor(private http: HttpClient) { }

  getItemPrice(locations: string[], itemUids: string[], qualities?: number): Observable<MarketResponse[]> {
    return this.http.get<MarketResponse[]>(`https://www.albion-online-data.com/api/v2/stats/prices/${itemUids}?locations=${locations}&qualities=${qualities}`);
  }

  getBestToSellBuy(itemUid: string, quality: number, locations?: string[]): Observable<BestPlaceModel> {

    let lobLocations = new Array<string>();

    lobLocations = locations ?? LOCATIONS.map( city => city.name);
    
    return this.getItemPrice(lobLocations, [itemUid], quality)
    .pipe(
      map( data => {
        let items =  data.filter( item => item.sell_price_max > 0);
        let bestPlaceToSell = items.sort( (a: MarketResponse, b: MarketResponse) => {
          return a.sell_price_max > b.sell_price_max ? 0 : 1;
        })[0];
        let bestPlaceToBuy = items.sort( (a: MarketResponse, b: MarketResponse) => {
          return a.sell_price_max < b.sell_price_max ? 0 : 1;
        })[0];

        let lobBestPlace: BestPlaceModel = {
          sellCity: bestPlaceToSell.city,
          sellPrice: bestPlaceToSell.sell_price_max,
          buyCity: bestPlaceToBuy.city,
          buyPrice: bestPlaceToBuy.sell_price_max
        };

        return lobBestPlace;
      })
    )
  }

  getItemUniqueName(searchTerm: string): string[] {
    return  ItemDataSource.filter( (item: ItemModel) => {
      if ( item.LocalizedNames && item.LocalizedNames.EN ) {
        return item.LocalizedNames.EN.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return null;
      }
    }).map( result => result.UniqueName);
  }

  getItemLocalizedName(searchTerm: string): string {
    return  ItemDataSource.filter( (item: ItemModel) => {
      if ( item.UniqueName ) {
        return item.UniqueName.toLowerCase() === searchTerm.toLowerCase();
      } else {
        return null;
      }
    }).map( result => result.LocalizedNames ? result.LocalizedNames.EN : '')[0];
  }
}
