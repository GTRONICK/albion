import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome(): void {
    this.router.navigate(['home']);
  }

  gotoCreate(): void {
    this.router.navigate(['create']);
  }

  gotoQuery(): void {
    this.router.navigate(['query']);
  }

  gotoMarket(): void {
    this.router.navigate(['market']);
  }

  gotoSettings(): void {
    this.router.navigate(['settings']);
  }

}
