import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { sessionStorageKeys } from '@models/session-storage-keys.enum';
import { ProfilesService, SessionStorageService } from '@modules/shared/services';
import { map } from 'rxjs';
import { BrowseService } from './browse.service';
import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';
import { ProfileLoadingComponent } from '../profile/profile-loading/profile-loading.component';
import { AsyncPipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileSelectionComponent } from '../profile-selection/profile-selection.component';
@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.scss'],
    imports: [ProfileLoadingComponent, HeaderComponent, CardsListComponent, FooterComponent, ProfileSelectionComponent, AsyncPipe]
})
export class BrowseComponent implements OnInit {
  browseServiceCurrentProfile$ = this._profilesService.currentProfile$;
  currentProfileLayout$ = this._browseService.currentProfileLayout$;
  currentProfileMainCard$ = this.currentProfileLayout$.pipe(
    map((profile) => profile?.mainCards[Math.floor(Math.random() * profile?.mainCards.length)] ?? null)
  );
  currentProfileCardsLists$ = this.currentProfileLayout$.pipe(map((profile) => profile?.lists ?? null));
  profileLoading = this._browseService.profileLoading;
  constructor(
    private _browseService: BrowseService,
    private _profilesService: ProfilesService,
    private _sessionStorage: SessionStorageService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    const res = this._sessionStorage.read(sessionStorageKeys.firstTime);
    if (!res) this.dialog.open(WelcomeDialogComponent);
    this._sessionStorage.update(sessionStorageKeys.firstTime, JSON.stringify(false));
  }
}
