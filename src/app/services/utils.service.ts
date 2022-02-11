import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public validateStatus(asStatus: string): string[] {
    switch(asStatus) {
        case 'damaged':
            return ['pi-exclamation-triangle', 'text-pink-700'];
        case 'test-pending':
            return ['pi-exclamation-circle', 'text-blue-700'];
        case 'ok':
            return ['pi-check-circle', 'text-green-700'];
        case 'discharged':
            return ['pi-exclamation-triangle', 'text-yellow-700'];
        default:
            return ['pi-check-circle'];
        
    }
  }
}
