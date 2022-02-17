import { SidebarService } from './../services/sidebar.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    SharedModule
  ],
  providers: [
    SidebarService
  ]
})
export class LayoutModule { }
