import { NgModule } from '@angular/core';
import { FactionHomeComponent } from './factionHome/faction-home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: FactionHomeComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FactionHomeRoutingModule { }