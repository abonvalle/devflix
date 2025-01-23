import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
    imports: [CommonModule, PrivacyRoutingModule, PrivacyComponent]
})
export class PrivacyModule {}
