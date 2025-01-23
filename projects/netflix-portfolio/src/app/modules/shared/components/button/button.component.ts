import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { buttonVariant } from './button-variant.interface';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    imports: [CommonModule, RouterModule]
})
export class ButtonComponent {
  readonly variant = input<keyof typeof buttonVariant>('primary');
  readonly rounded = input<boolean>(false);
  readonly href = input<string[] | null>(null);
  readonly disabled = input<boolean>(false);
  get variantClasses(): string {
    return buttonVariant[this.variant()];
  }
  get complementaryClasses() {
    return `${this.variantClasses} ${this.rounded() ? '!w-fit rounded-full !p-2 !m-[4px]' : ''} ${
      this.disabled() ? 'cursor-not-allowed opacity-50 hover:border-[unset]' : ''
    }`;
  }
}
