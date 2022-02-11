import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
      { path: '', loadChildren: () => import('../modules/market/market.module').then( m => m.MarketModule) }
    ]},
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild( routes )
    ]
  })
export class LayoutRoutingModule {}