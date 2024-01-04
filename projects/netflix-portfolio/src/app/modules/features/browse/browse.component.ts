import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { sessionStorageKeys } from '@models/session-storage-keys.enum';
import { ProfilesService, SessionStorageService } from '@modules/shared/services';
import { map } from 'rxjs';
import { BrowseService } from './browse.service';
import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  browseServiceCurrentProfile$ = this._profilesService.currentProfile$;
  currentProfileLayout$ = this._browseService.currentProfileLayout$;
  currentProfileMainCard$ = this.currentProfileLayout$.pipe(
    map((profile) => profile?.mainCards[Math.floor(Math.random() * profile?.mainCards.length)] ?? null)
  );
  currentProfileCardsLists$ = this.currentProfileLayout$.pipe(map((profile) => profile?.lists ?? null));
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
