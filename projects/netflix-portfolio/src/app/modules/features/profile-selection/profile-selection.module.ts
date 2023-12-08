import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { AddProfileTriggerComponent } from '@features/profile-selection/components/add-profile-trigger/add-profile-trigger.component';
import { ButtonComponent } from '@modules/shared/components/button/button.component';
import { ProfileThumbnailComponent } from './components/profile-thumbnail/profile-thumbnail.component';
import { ProfileSelectionComponent } from './profile-selection.component';
@NgModule({
  declarations: [ProfileSelectionComponent, AddProfileTriggerComponent, ProfileThumbnailComponent],
  imports: [CommonModule, RouterModule, ButtonComponent, MatSnackBarModule, MatDialogModule],
  exports: [ProfileSelectionComponent]
})
export class ProfileSelectionModule {}
