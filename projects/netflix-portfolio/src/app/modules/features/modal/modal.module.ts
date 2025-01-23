import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from '@modules/shared/components/button/button.component';
import { CardsComponent } from '@modules/shared/components/cards/cards.component';
import { CardDetailsHeaderComponent } from './components/card-details-header/card-details-header.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { MiniModalComponent } from './components/mini-modal/mini-modal.component';
import { ModalComponent } from './modal.component';

@NgModule({
    imports: [CommonModule, ButtonComponent, CardsComponent, ModalComponent,
        MiniModalComponent,
        DetailModalComponent,
        CardDetailsComponent,
        CardDetailsHeaderComponent],
    exports: [ModalComponent]
})
export class ModalModule {}
