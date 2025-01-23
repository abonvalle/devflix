import { Component } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { Card } from '../../../models/card.type';
import { ModalService } from './modal.service';
import { AsyncPipe } from '@angular/common';
import { MiniModalComponent } from './components/mini-modal/mini-modal.component';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    imports: [MiniModalComponent, AsyncPipe]
})
export class ModalComponent {
  private _destroy$: Subject<void> = new Subject();
  card$: BehaviorSubject<Card | null> = new BehaviorSubject<Card | null>(null);
  constructor(private _modalService: ModalService) {}
  ngOnInit(): void {
    this._modalService.currentFocusCard$.pipe(takeUntil(this._destroy$)).subscribe((focusCard) => {
      // console.warn('card focus change', focusCard, focusCard?.node.getBoundingClientRect());

      this.card$.next(focusCard);
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }
}
