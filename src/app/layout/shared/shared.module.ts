import { AutoFocus } from './../../directives/auto-focus.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ScrollTopModule } from 'primeng/scrolltop';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    AutoFocus
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    FormsModule,
    TooltipModule,
    TableModule,
    ScrollTopModule,
    MessagesModule,
    ToastModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ProgressSpinnerModule,
    CardModule,
    DynamicDialogModule,
    InputSwitchModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    ButtonModule,
    FormsModule,
    TooltipModule,
    TableModule,
    ScrollTopModule,
    MessagesModule,
    ToastModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ProgressSpinnerModule,
    CardModule,
    DynamicDialogModule,
    InputSwitchModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService
  ]
})
export class SharedModule { }
