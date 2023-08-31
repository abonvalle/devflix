import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { BrowseComponent } from './browse.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent
  }
];

@NgModule({
  declarations: [BrowseComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonComponent]
})
export class BrowseModule {}
