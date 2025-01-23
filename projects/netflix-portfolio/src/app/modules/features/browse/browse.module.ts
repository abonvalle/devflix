import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';


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
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonComponent,
    MatDialogModule,
    CardsComponent,
    ProfileLoadingComponent,
    BrowseComponent, HeaderComponent, CardsListComponent, FooterComponent
]
})
export class BrowseModule {}
