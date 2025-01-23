import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-core-layout',
    templateUrl: './core-layout.component.html',
    styleUrls: ['./core-layout.component.scss'],
    imports: [TopbarComponent, RouterOutlet]
})
export class CoreLayoutComponent {

}
