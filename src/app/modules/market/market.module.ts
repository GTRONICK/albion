import { MarketHomeComponent } from './market-home/market-home.component';
import { SharedModule } from '../../layout/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { BestPlaceComponent } from './best-place/best-place.component';


@NgModule({
  declarations: [
    MarketHomeComponent,
    BestPlaceComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule,
    SharedModule
  ],
  entryComponents: [
    BestPlaceComponent
  ],
})
export class MarketModule { }
