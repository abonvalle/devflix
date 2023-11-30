import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { CardsComponent } from '@modules/shared/cards/cards.component';
import { CardDetailsHeaderComponent } from './components/card-details-header/card-details-header.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { MiniModalComponent } from './components/mini-modal/mini-modal.component';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    MiniModalComponent,
    DetailModalComponent,
    CardDetailsComponent,
    CardDetailsHeaderComponent
  ],
  imports: [CommonModule, ButtonComponent, CardsComponent],
  exports: [ModalComponent]
})
export class ModalModule {}
