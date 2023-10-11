import { Component, HostListener } from '@angular/core';
import { BrowseService } from '@features/browse/browse.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  providers: [BrowseService]
})
export class TopbarComponent {
  isBgDark$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  profile$ = this._browseService.currentProfile$;
  constructor(private _browseService: BrowseService) {
    this.setIsBgDark();
  }
  @HostListener('window:scroll') setIsBgDark(): void {
    this.isBgDark$.next(window.scrollY > 100);
  }
}
