import { Component, HostListener, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { BrowseService } from '@features/browse/browse.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  isBgDark$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  profile$ = this._browseService.currentProfile$;
  constructor(private _browseService: BrowseService) {
    this.setIsBgDark();
  }
  @HostListener('window:scroll') setIsBgDark(): void {
    this.isBgDark$.next(window.scrollY > 100);
  }

  changeProfil(guid: string) {
    this._browseService.updateProfile(guid);
  }
  editProfiles() {
    this._browseService.editProfiles();
  }
  disconnect() {
    this._browseService.disconnect();
  }
}
