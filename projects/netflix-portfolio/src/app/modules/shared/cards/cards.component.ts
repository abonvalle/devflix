import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Card } from '@models/*';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CardsComponent {
  @Input({ required: true }) card!: Card;
  isHovered: boolean = false;

  setIsHover(state: boolean) {
    this.isHovered = state;
  }
}
