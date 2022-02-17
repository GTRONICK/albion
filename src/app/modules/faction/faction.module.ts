import { FactionHomeRoutingModule } from './faction-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactionHomeComponent } from './factionHome/faction-home.component';



@NgModule({
  declarations: [
    FactionHomeComponent
  ],
  imports: [
    CommonModule,
    FactionHomeRoutingModule
  ]
})
export class FactionModule { }
