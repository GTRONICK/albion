import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {label: 'Notifications', icon: 'pi pi-fw pi-bell', command: () => this.goToNotifications()},
      {label: 'Account', icon: 'pi pi-fw pi-user'}
    ];
  }

  goToLogin(): void {
    this.router.navigate(['login']);
  }

  goToNotifications(): void {
    console.log('Notifications activated');
  }
}
