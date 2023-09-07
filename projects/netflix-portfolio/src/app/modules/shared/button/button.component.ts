import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { buttonVariant } from './button-variant.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ButtonComponent {
  @Input() variante: keyof typeof buttonVariant = 'primary';
  @Input() rounded: boolean = false;
  @Input() href: string[] = [''];
  get variantClasses(): string {
    return buttonVariant[this.variante];
  }
  get complementaryClasses() {
    return `${this.variantClasses} ${this.rounded ? 'w-fit rounded-full p-2' : ''}`;
  }
}
