import { Component, Input } from '@angular/core';
import * as profilesJSON from '@assets/jsons/profiles.json';
import { Profile } from '../../../models/profile';
@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss']
})
export class ProfileSelectionComponent {
  @Input() editor: boolean = false;
  profiles: Profile[];
  constructor() {
    const profiles = profilesJSON;
    this.profiles = profiles.profiles;
    console.warn(this.profiles);
  }
}
