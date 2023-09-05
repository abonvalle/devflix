import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { ProfileSelectionComponent } from '@modules/shared/profile-selection/profile-selection.component';
import { ManageProfilesComponent } from './manage-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: ManageProfilesComponent
  }
];

@NgModule({
  declarations: [ManageProfilesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonComponent, ProfileSelectionComponent]
})
export class ManageProfilesModule {}
