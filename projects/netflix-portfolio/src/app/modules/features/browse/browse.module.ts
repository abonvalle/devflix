import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from '@features/modal/modal.module';
import { ProfileSelectionModule } from '@features/profile-selection/profile-selection.module';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { CardsComponent } from '../../shared/cards/cards.component';
import { BrowseComponent } from './browse.component';
import { CardsList2Component } from './components/cards-list2/cards-list2.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent
  }
];

@NgModule({
  declarations: [BrowseComponent, HeaderComponent, CardsList2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonComponent,
    ProfileSelectionModule,
    MatDialogModule,
    ModalModule,
    CardsComponent
  ]
})
export class BrowseModule {}
