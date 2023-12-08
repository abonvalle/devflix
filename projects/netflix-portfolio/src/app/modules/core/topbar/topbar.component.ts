import { Component, HostListener, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ProfilesService } from '@modules/shared/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  isBgDark$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currentProfile$ = this._profilesService.currentProfile$;
  profiles$ = this._profilesService.profiles$;
  constructor(private _profilesService: ProfilesService) {
    this.setIsBgDark();
  }
  @HostListener('window:scroll') setIsBgDark(): void {
    this.isBgDark$.next(window.scrollY > 100);
  }

  changeProfil(guid: string) {
    this._profilesService.updateProfile(guid);
  }
  editProfiles() {
    this._profilesService.editProfiles();
  }
  disconnect() {
    this._profilesService.disconnect();
  }
}
