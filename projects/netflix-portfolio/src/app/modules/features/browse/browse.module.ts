import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from '@features/modal/modal.module';
import { ProfileSelectionModule } from '@features/profile-selection/profile-selection.module';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { CardsComponent } from '../../shared/cards/cards.component';
import { BrowseComponent } from './browse.component';
import { BrowseService } from './browse.service';
import { CardDetailsHeaderComponent } from './components/card-details-header/card-details-header.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent
  }
];

@NgModule({
  declarations: [
    BrowseComponent,
    HeaderComponent,
    CardsListComponent,
    CardDetailsComponent,
    CardDetailsHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonComponent,
    ProfileSelectionModule,
    MatDialogModule,
    ModalModule,
    CardsComponent
  ],
  providers: [BrowseService]
})
export class BrowseModule {}
