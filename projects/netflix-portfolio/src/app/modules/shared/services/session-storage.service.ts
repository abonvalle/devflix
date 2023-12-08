import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  clear$: Subject<void> = new Subject();
  isVersionCtrled: boolean = false;
  constructor(private _utilsServ: UtilsService) {}
  read(key: string): string | null {
    const res = sessionStorage.getItem(key);
    return res ? this._utilsServ.decode(res) : null;
  }
  update(key: string, value: string): void {
    sessionStorage.setItem(key, this._utilsServ.encode(value));
  }
  delete(key: string): void {
    sessionStorage.removeItem(key);
  }
  clearStorage(): void {
    this.clear$.next();
    sessionStorage.clear();
  }
}
