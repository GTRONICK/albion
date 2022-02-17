import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.css']
})
export class SettingsHomeComponent implements OnInit {

  gbOnlyReal: boolean = false;
  gbExclude: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.gbOnlyReal = sessionStorage.getItem('onlyReal') === 'true';
    this.gbExclude = sessionStorage.getItem('exclude') === 'true';
  }

  onlyReal(event: any): void {
    sessionStorage.setItem('onlyReal', `${event.checked}`);
  }

  exclude(event: any): void {
    sessionStorage.setItem('exclude', `${event.checked}`);
  }
}
