import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { MiniModalComponent } from './components/mini-modal/mini-modal.component';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent, MiniModalComponent, DetailModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent]
})
export class ModalModule {}
