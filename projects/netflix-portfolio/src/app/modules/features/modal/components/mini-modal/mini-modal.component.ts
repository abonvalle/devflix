import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Card } from '@models/card.type';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-mini-modal',
    templateUrl: './mini-modal.component.html',
    styleUrls: ['./mini-modal.component.scss']
})
export class MiniModalComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<void> = new Subject();
  @Input({ required: true }) card!: Card;
  constructor() {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }
}
