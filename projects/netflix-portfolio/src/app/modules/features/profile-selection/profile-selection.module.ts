import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProfileTriggerComponent } from '@features/profile-selection/components/add-profile-trigger/add-profile-trigger.component';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { ProfileThumbnailComponent } from './components/profile-thumbnail/profile-thumbnail.component';
import { ProfileSelectionComponent } from './profile-selection.component';

@NgModule({
  declarations: [ProfileSelectionComponent, AddProfileTriggerComponent, ProfileThumbnailComponent],
  imports: [CommonModule, RouterModule, ButtonComponent],
  exports: [ProfileSelectionComponent]
})
export class ProfileSelectionModule {}
