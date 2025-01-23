
import { Component, OnInit, input, model } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  readonly icon = input.required<string>();
  readonly width = model<string>();
  readonly height = model<string>();
  readonly size = input<string | undefined>('24');
  readonly fill = input<string>();
  readonly class = input<string>();

  ngOnInit(): void {
    if (!this.width() && !this.height()) {
      this.width.set(this.size());
      this.height.set(this.size());
    }
  }
}
