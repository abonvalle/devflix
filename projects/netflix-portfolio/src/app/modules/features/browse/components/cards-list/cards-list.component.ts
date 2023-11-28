import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from '@features/modal/modal.service';
import { Card } from '@models/*';
import { BehaviorSubject } from 'rxjs';
import { CardDetailsComponent } from '../card-details/card-details.component';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  @Input({ required: true }) cards: Card[] = [];
  @Input({ required: true }) name: string = '';
  isHover$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    public dialog: MatDialog,
    private _modalService: ModalService
  ) {}
  openCardDetails(card: Card) {
    this.dialog.closeAll();
    this.dialog.open(CardDetailsComponent, { data: { card }, maxWidth: '100vw' });
  }
  setIsHover(state: boolean, card: Card) {
    this._modalService.currentFocusCard$.next(state ? card : null);
  }
}
