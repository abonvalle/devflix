import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material/menu';

@Component({
    selector: 'app-mat-menu-hover',
    templateUrl: './mat-menu-hover.component.html',
    styleUrls: ['./mat-menu-hover.component.scss'],
    imports: [MatMenuTrigger, MatMenu]
})
export class MatMenuHoverComponent {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  isMenuOpen: boolean = false;
  timedOutCloser: number | null = null;
  constructor() {}

  mouseEnter() {
    if (this.timedOutCloser) {
      window.clearTimeout(this.timedOutCloser);
    }
    this.menuTrigger.openMenu();
    this.isMenuOpen = true;
  }

  mouseLeave() {
    this.timedOutCloser = window.setTimeout(() => {
      this.menuTrigger.closeMenu();
      this.isMenuOpen = false;
    }, 250);
  }
}
