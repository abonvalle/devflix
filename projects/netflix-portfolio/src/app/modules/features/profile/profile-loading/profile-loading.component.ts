import { Component, Input } from '@angular/core';
import { ProfileThumbnailComponent } from '@features/profile-selection/components/profile-thumbnail/profile-thumbnail.component';
import { Profile } from '@models/profile.interface';

@Component({
    selector: 'app-profile-loading',
    imports: [ProfileThumbnailComponent],
    templateUrl: './profile-loading.component.html',
    styleUrl: './profile-loading.component.scss'
})
export class ProfileLoadingComponent {
  @Input({ required: true }) profile!: Profile;
}
