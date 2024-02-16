import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from '@features/modal/modal.module';
import { ProfileSelectionModule } from '@features/profile-selection/profile-selection.module';
import { ProfileLoadingComponent } from '@features/profile/profile-loading/profile-loading.component';
import { ButtonComponent } from '@modules/shared/components/button/button.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { BrowseComponent } from './browse.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent
  }
];

@NgModule({
  declarations: [BrowseComponent, HeaderComponent, CardsListComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonComponent,
    ProfileSelectionModule,
    MatDialogModule,
    ModalModule,
    CardsComponent,
    ProfileLoadingComponent
  ]
})
export class BrowseModule {}
