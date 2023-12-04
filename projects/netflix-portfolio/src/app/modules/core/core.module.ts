import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreLayoutComponent } from './core-layout/core-layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MatMenuHoverComponent } from './topbar/components/mat-menu-hover/mat-menu-hover.component';
@NgModule({
  declarations: [TopbarComponent, CoreLayoutComponent, MatMenuHoverComponent],
  imports: [CommonModule, RouterModule, MatMenuModule, BrowserAnimationsModule],
  exports: [TopbarComponent]
})
export class CoreModule {}
