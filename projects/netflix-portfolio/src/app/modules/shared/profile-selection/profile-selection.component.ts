import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as profilesJSON from '@assets/jsons/profiles.json';
import { Profile } from '../../../models/profile';
import { ButtonComponent } from '../button/button.component';
import { ProfileThumbnailComponent } from '../profile-thumbnail/profile-thumbnail.component';
@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ProfileThumbnailComponent]
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
