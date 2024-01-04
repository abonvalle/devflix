import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as profilesJSON from '@assets/jsons/profiles.json';
import { Profile } from '@models/profile.interface';
import { sessionStorageKeys } from '@models/session-storage-keys.enum';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profiles$ = new BehaviorSubject<Profile[]>([]);
  readonly currentProfile$: BehaviorSubject<Profile | null> = new BehaviorSubject<Profile | null>(null);

  constructor(
    private _router: Router,
    private _sessStrgService: SessionStorageService
  ) {
    const profilesObj = profilesJSON;
    const profiles = profilesObj.profiles;
    try {
      const hiddenProfilesStrg = this._sessStrgService.read(sessionStorageKeys.hiddenProfiles);
      if (hiddenProfilesStrg) {
        const hiddenProfiles = JSON.parse(hiddenProfilesStrg) as { [guid: string]: boolean }[];
        hiddenProfiles.forEach((hp) => {
          const hpGuid = Object.keys(hp)[0];
          const p = profiles.find((p) => p.guid === hpGuid);
          if (!p) {
            return;
          }
          p.hidden = hp[hpGuid as keyof typeof hp] ?? false;
        });
      }
    } catch (e) {
      console.error(e);
    }
    this.profiles$.next(profiles);

    const profile = this._sessStrgService.read(sessionStorageKeys.currentProfile);
    if (profile) {
      this.setCurrentProfile(JSON.parse(profile));
    }

    this.profiles$.subscribe((profiles) => {
      this._sessStrgService.update(
        sessionStorageKeys.hiddenProfiles,
        JSON.stringify(profiles.map((p) => ({ [p.guid]: p.hidden })))
      );
    });
  }
  async setCurrentProfile(profile: Profile): Promise<void> {
    this.currentProfile$.next(profile);
    this._sessStrgService.update(sessionStorageKeys.currentProfile, JSON.stringify(profile));
  }
  disconnect() {
    this.currentProfile$.next(null);
    this._sessStrgService.clearStorage();
    this._router.navigateByUrl('/login');
  }
  editProfiles() {
    this.currentProfile$.next(null);
    this._sessStrgService.delete(sessionStorageKeys.currentProfile);
    this._router.navigateByUrl('/ManageProfiles');
  }
  updateProfile(guid: string) {
    const profilesjson = profilesJSON;
    const profiles = profilesjson.profiles;
    const selectedProfile = profiles.find((p) => p.guid === guid);
    if (selectedProfile) {
      this.setCurrentProfile(selectedProfile);
    }
  }
}
