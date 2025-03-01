import { Component, input } from '@angular/core';
import { Profile } from '@models/profile.interface';

@Component({
  selector: 'app-profile-loading',
  templateUrl: './profile-loading.component.html',
  styleUrl: './profile-loading.component.scss',
  standalone: true
})
export class ProfileLoadingComponent {
  readonly profile = input.required<Profile>();
}
