import { Subscription } from 'rxjs';
import { SidebarService } from './../services/sidebar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  public gbShowSidebar = false;
  sidebarSubscription: Subscription;

  constructor(private sidebarService: SidebarService) {
    this.sidebarSubscription = this.sidebarService.openSidebar$.subscribe( value => this.gbShowSidebar = value );
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.sidebarSubscription.unsubscribe();
  }
}
