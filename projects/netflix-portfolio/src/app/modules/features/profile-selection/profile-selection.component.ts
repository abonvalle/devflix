import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as profilesJSON from '@assets/jsons/profiles.json';
import { BrowseService } from '@features/browse/browse.service';
import { Subject, distinctUntilChanged, takeUntil, timeout } from 'rxjs';
import { Profile } from '../../../models/profile.interface';
import { HidedProfilesSelectionDialogComponent } from './components/hided-profiles-selection-dialog/hided-profiles-selection-dialog.component';
import { ProfileSelectionService } from './profile-selection.service';
@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss']
})
export class ProfileSelectionComponent implements OnInit, OnDestroy {
  @Input() editor: boolean = false;
  readonly profiles$ = this._profileSelection.profiles$;
  private _destroy$: Subject<void> = new Subject();
  constructor(
    private _browseService: BrowseService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _profileSelection: ProfileSelectionService
  ) {}
  ngOnInit(): void {
    const profiles = profilesJSON;
    this._profileSelection.profiles$.next(profiles.profiles);
    this._profileSelection.profiles$
      .pipe(takeUntil(this._destroy$), distinctUntilChanged())
      .subscribe((hiddenProfiles) => {
        const profiles = this.profiles$.value;
        profiles.map((profile) => {
          if (Object.keys(hiddenProfiles).find((guid) => guid === profile.guid)) {
            console.warn('test', hiddenProfiles[profile.guid as keyof typeof hiddenProfiles]);
            profile.hidden = !hiddenProfiles[profile.guid as keyof typeof hiddenProfiles];
          }
        });
        this._profileSelection.profiles$.next(profiles);
        console.warn(this._profileSelection.profiles$.value);
      });
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }

  onProfileClick(profile: Profile): void {
    if (this.editor) {
      this.alertEdit();
    } else {
      this._browseService.setCurrentProfile(profile);
    }
  }
  alertEdit() {
    this._snackBar.open('Vous ne pouvez pas modifier les profils pour le moment.', undefined, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  alert() {
    const snackbarRef = this._snackBar.open(
      'Vous devez choisir parmis les profils préparamétrés pour le moment',
      'choisir',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
    snackbarRef
      .onAction()
      .pipe(takeUntil(this._destroy$), distinctUntilChanged(), timeout(3100))
      .subscribe(() => {
        this.dialog.open(HidedProfilesSelectionDialogComponent);
        console.log('The snackbar action was triggered!');
      });
  }
}
