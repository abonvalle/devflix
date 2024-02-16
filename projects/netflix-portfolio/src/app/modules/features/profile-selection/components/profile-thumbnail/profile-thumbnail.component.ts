import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Profile } from '@models/profile.interface';

@Component({
  selector: 'app-profile-thumbnail',
  templateUrl: './profile-thumbnail.component.html',
  styleUrls: ['./profile-thumbnail.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProfileThumbnailComponent {
  @Input({ required: true }) profile!: Profile;
  @Input() editor: boolean = false;
}
