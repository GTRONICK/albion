import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
      { path: '', loadChildren: () => import('../modules/market/market.module').then( m => m.MarketModule) },
      { path: 'faction', loadChildren: () => import('../modules/faction/faction.module').then( m => m.FactionModule) },
      { path: 'info', loadChildren: () => import('../modules/info/info.module').then( m => m.InfoModule) },
      { path: 'settings', loadChildren: () => import('../modules/settings/settings.module').then( m => m.SettingsModule) },
    ]},
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild( routes )
    ]
  })
export class LayoutRoutingModule {}