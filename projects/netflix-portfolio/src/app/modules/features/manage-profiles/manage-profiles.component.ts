import { Component } from '@angular/core';
import * as profilesJSON from '@assets/jsons/profiles.json';
import { Profile } from '../../../models/profile.interface';
import { ProfileSelectionComponent } from '../profile-selection/profile-selection.component';

@Component({
    selector: 'app-manage-profiles',
    templateUrl: './manage-profiles.component.html',
    styleUrls: ['./manage-profiles.component.scss'],
    imports: [ProfileSelectionComponent]
})
export class ManageProfilesComponent {
  profiles: Profile[];
  constructor() {
    const profiles = profilesJSON;
    this.profiles = profiles.profiles;
    console.warn(this.profiles);
  }
}
