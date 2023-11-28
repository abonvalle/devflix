import { Component, Input } from '@angular/core';
import * as profilesJSON from '@assets/jsons/profiles.json';
import { BrowseService } from '@features/browse/browse.service';
import { Profile } from '../../../models/profile.interface';
@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss']
})
export class ProfileSelectionComponent {
  @Input() editor: boolean = false;
  profiles: Profile[];
  constructor(private _browseService: BrowseService) {
    const profiles = profilesJSON;
    this.profiles = profiles.profiles;
    console.warn(this.profiles);
  }
  onProfileClick(profile: Profile): void {
    if (this.editor) {
    } else {
      this._browseService.setCurrentProfile(profile);
    }
  }
}
