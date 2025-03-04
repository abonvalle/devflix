import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger, MatMenuItem } from '@angular/material/menu';
import { ProfilesService } from '@modules/shared/services';
import { BehaviorSubject, map } from 'rxjs';
import { NgClass, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatMenuHoverComponent } from './components/mat-menu-hover/mat-menu-hover.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
    imports: [NgClass, RouterLink, MatMenuHoverComponent, MatMenuItem, AsyncPipe]
})
export class TopbarComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  isBgDark$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currentProfile$ = this._profilesService.currentProfile$;
  profiles$ = this._profilesService.profiles$;
  hasProfileSelected$ = this._profilesService.currentProfile$.pipe(map((v) => v !== null));
  get isMobile(): boolean {
    return window.innerWidth < 768;
  }
  constructor(private _profilesService: ProfilesService) {}
  ngOnInit(): void {
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
