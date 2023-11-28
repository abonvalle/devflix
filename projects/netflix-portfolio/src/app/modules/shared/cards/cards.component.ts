import { Component, Input } from '@angular/core';
import { Card } from '@models/*';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  styles: [':host{display:contents}'],
  standalone: true
})
export class CardsComponent {
  @Input({ required: true }) card!: Card;
}
