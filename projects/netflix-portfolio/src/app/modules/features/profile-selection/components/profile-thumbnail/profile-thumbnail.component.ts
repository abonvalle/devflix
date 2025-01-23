
import { Component, input } from '@angular/core';
import { Profile } from '@models/profile.interface';

@Component({
  selector: 'app-profile-thumbnail',
  templateUrl: './profile-thumbnail.component.html',
  styleUrls: ['./profile-thumbnail.component.scss'],
  imports: [],
  standalone: true
})
export class ProfileThumbnailComponent {
  readonly profile = input.required<Profile>();
  readonly editor = input<boolean>(false);
}
