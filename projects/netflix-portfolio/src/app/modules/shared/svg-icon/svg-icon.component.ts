import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() icon!: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() size?: string = '24';
  @Input() fill?: string;
  @Input() class?: string;

  ngOnInit(): void {
    if (!this.width && !this.height) {
      this.width = this.size;
      this.height = this.size;
    }
  }
}
