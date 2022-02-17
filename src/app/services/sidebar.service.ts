import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  openSidebar: Subject<boolean> = new Subject();
  openSidebar$: Observable<boolean> = this.openSidebar.asObservable();

  constructor() { }
}
