import { Component, Input } from '@angular/core';
import { Card } from '@models/*';
@Component({
  selector: 'app-card-details-header',
  templateUrl: './card-details-header.component.html',
  styleUrls: ['./card-details-header.component.scss']
})
export class CardDetailsHeaderComponent {
  @Input({ required: true }) card!: Card;
  mute: boolean = true;
  constructor() {}
}
