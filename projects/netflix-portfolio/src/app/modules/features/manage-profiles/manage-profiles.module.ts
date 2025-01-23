import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from '@modules/shared/components/button/button.component';
import { ManageProfilesComponent } from './manage-profiles.component';

const routes: Routes = [
  {
    path: '',
    component: ManageProfilesComponent
  }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), ButtonComponent, ManageProfilesComponent]
})
export class ManageProfilesModule {}
