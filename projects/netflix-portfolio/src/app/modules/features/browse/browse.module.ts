import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSelectionModule } from '@features/profile-selection/profile-selection.module';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { BrowseComponent } from './browse.component';
import { BrowseService } from './browse.service';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent
  }
];

@NgModule({
  declarations: [BrowseComponent, HeaderComponent, CardsListComponent, CardsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonComponent, ProfileSelectionModule],
  providers: [BrowseService]
})
export class BrowseModule {}
