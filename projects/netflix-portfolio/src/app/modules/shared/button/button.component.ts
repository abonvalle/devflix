import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { buttonVariant } from './button-variant.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() variant: keyof typeof buttonVariant = 'primary';
  @Input() rounded: boolean = false;
  variantClasses: string = buttonVariant[this.variant];
  get complementaryClasses() {
    return `${this.variantClasses} ${this.rounded ? 'w-fit rounded-full p-2' : ''}`;
  }
}
