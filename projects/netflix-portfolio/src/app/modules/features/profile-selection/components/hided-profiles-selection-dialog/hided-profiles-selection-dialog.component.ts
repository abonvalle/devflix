import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProfilesService } from '@modules/shared/services';
import { Subject, takeUntil } from 'rxjs';
@Component({
    selector: 'app-hided-profiles-selection-dialog',
    templateUrl: './hided-profiles-selection-dialog.component.html',
    styleUrls: ['./hided-profiles-selection-dialog.component.scss'],
    imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule, MatSlideToggleModule]
})
export class HidedProfilesSelectionDialogComponent implements OnInit, OnDestroy {
  data: {
    '7bfad4e5-9d8f-426a-8f29-46e22fae3aez': boolean;
    '7bfad4e5-9d8f-426a-8f29-46e22fae3aer': boolean;
  } = {
    '7bfad4e5-9d8f-426a-8f29-46e22fae3aez': false,
    '7bfad4e5-9d8f-426a-8f29-46e22fae3aer': false
  };
  private _destroy$: Subject<void> = new Subject();
  constructor(
    public dialogRef: MatDialogRef<HidedProfilesSelectionDialogComponent>,
    private _profilesService: ProfilesService
  ) {}
  ngOnInit(): void {
    this._profilesService.profiles$.pipe(takeUntil(this._destroy$)).subscribe((profiles) => {
      profiles.forEach((profile) => {
        const dataGuid = Object.keys(this.data).find((guid) => guid === profile.guid) as
          | '7bfad4e5-9d8f-426a-8f29-46e22fae3aez'
          | '7bfad4e5-9d8f-426a-8f29-46e22fae3aer';
        if (dataGuid) {
          this.data[dataGuid] = !profile.hidden;
        }
      });
    });
  }
  ngOnDestroy(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  save() {
    const profiles = this._profilesService.profiles$.value;
    profiles.map((profile) => {
      const dataGuid = Object.keys(this.data).find((guid) => guid === profile.guid) as
        | '7bfad4e5-9d8f-426a-8f29-46e22fae3aez'
        | '7bfad4e5-9d8f-426a-8f29-46e22fae3aer';
      if (dataGuid) {
        profile.hidden = !this.data[dataGuid];
      }
    });
    this._profilesService.profiles$.next(profiles);
    this.dialogRef.close();
  }
}
