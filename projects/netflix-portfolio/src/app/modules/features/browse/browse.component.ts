import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BrowseService } from './browse.service';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  browseServiceCurrentProfile$ = this._browseService.currentProfile$;
  currentProfileLayout$ = this._browseService.currentProfileLayout$;
  currentProfileMainCard$ = this.currentProfileLayout$.pipe(
    map((profile) => profile?.mainCards[Math.floor(Math.random() * profile?.mainCards.length)] ?? null)
  );
  currentProfileCardsLists$ = this.currentProfileLayout$.pipe(map((profile) => profile?.lists ?? null));
  constructor(private _browseService: BrowseService) {}
}
