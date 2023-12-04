import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSelectionModule } from '@features/profile-selection/profile-selection.module';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { ManageProfilesComponent } from './manage-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: ManageProfilesComponent
  }
];

@NgModule({
  declarations: [ManageProfilesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonComponent, ProfileSelectionModule]
})
export class ManageProfilesModule {}
