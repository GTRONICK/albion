import { BestPlaceComponent } from './best-place/best-place.component';
import { MarketHomeComponent } from './market-home/market-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MarketHomeComponent
  },
  {
    path: 'best',
    component: BestPlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
