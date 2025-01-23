import { Component, input } from '@angular/core';
import { Card } from '@models/card.type';

@Component({
    selector: 'app-card-details-header',
    templateUrl: './card-details-header.component.html',
    styleUrls: ['./card-details-header.component.scss'],
    imports: []
})
export class CardDetailsHeaderComponent {
  readonly card = input.required<Card>();
  mute: boolean = true;
  constructor() {}
}
