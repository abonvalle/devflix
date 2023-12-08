import { Component, Input } from '@angular/core';
import { Profile } from '@models/profile.interface';

@Component({
  selector: 'app-profile-thumbnail',
  templateUrl: './profile-thumbnail.component.html',
  styleUrls: ['./profile-thumbnail.component.scss']
})
export class ProfileThumbnailComponent {
  @Input({ required: true }) profile!: Profile;
  @Input() editor: boolean = false;
}
