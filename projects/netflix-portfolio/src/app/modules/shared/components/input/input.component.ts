import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true
})
export class InputComponent {
  readonly placeholder = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly value = input<string>('');
  readonly type = input<string>('text');
}
