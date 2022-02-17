import { SharedModule } from './../../layout/shared/shared.module';
import { SettingsRountingModule } from './settings-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsHomeComponent } from './settings-home/settings-home.component';



@NgModule({
  declarations: [
    SettingsHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRountingModule
  ]
})
export class SettingsModule { }
