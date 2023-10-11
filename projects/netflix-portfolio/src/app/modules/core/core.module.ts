import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreLayoutComponent } from './core-layout/core-layout.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [TopbarComponent, CoreLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopbarComponent]
})
export class CoreModule {}
