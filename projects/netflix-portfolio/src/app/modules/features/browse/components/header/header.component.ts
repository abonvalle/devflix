import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDetailsComponent } from '@features/modal/components/card-details/card-details.component';
import { Card } from '@models/card.type';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [NgIf, ButtonComponent]
})
export class HeaderComponent {
  @Input({ required: true }) card!: Card;
  mute: boolean = true;
  constructor(public dialog: MatDialog) {}
  openDetail() {
    this.dialog.closeAll();
    this.dialog.open(CardDetailsComponent, {
      data: { card: this.card },
      maxWidth: '100vw',
      height: '100%',
      panelClass: '!mt-[28px]'
    });
  }
}
