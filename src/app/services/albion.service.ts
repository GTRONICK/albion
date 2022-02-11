import { ItemModel } from './../models/itemModel';
import { MarketResponse } from './../models/marketResponse.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemDataSource } from './ItemDB';

@Injectable({
  providedIn: 'root'
})
export class AlbionService {

  constructor(private http: HttpClient) { }

  getItemPrice(locations: string[], itemUids: string[], qualities?: number): Observable<MarketResponse[]> {
    return this.http.get<MarketResponse[]>(`https://www.albion-online-data.com/api/v2/stats/prices/${itemUids}?locations=${locations}&qualities=${qualities}`);
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
