import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProfilesComponent } from './manage-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: ManageProfilesComponent
  }
];

@NgModule({
  declarations: [ManageProfilesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ManageProfilesModule {}
