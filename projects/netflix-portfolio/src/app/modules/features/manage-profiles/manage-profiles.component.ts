import { Component } from '@angular/core';
import * as profilesJSON from '@assets/jsons/profiles.json';
import { Profile } from '../../../models/profile.interface';

@Component({
  selector: 'app-manage-profiles',
  templateUrl: './manage-profiles.component.html',
  styleUrls: ['./manage-profiles.component.scss']
})
export class ManageProfilesComponent {
  profiles: Profile[];
  constructor() {
    const profiles = profilesJSON;
    this.profiles = profiles.profiles;
    console.warn(this.profiles);
  }
}
