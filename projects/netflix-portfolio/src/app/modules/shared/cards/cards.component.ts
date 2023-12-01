import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { ModalService } from '@features/modal/modal.service';
import { Card } from '@models/*';
import { BehaviorSubject, Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent]
})
export class CardsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cardMiniModal') cardMiniModal!: ElementRef<HTMLElement>;
  @ViewChild('cardMiniModalDetails') cardMiniModalDetails!: ElementRef<HTMLElement>;
  @Input({ required: true }) card!: Card;
  isHovered$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  _destroy$: Subject<void> = new Subject();
  isCurrentOpenedCard$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private _modalService: ModalService,
    private _renderer: Renderer2
  ) {}
  setIsHover(state: boolean) {
    this.isHovered$.next(state);
  }
  ngAfterViewInit(): void {
    this.isHovered$.pipe(takeUntil(this._destroy$), debounceTime(25), distinctUntilChanged()).subscribe((state) => {
      this._modalService.currentFocusCard$.next(state ? this.card : null);
      if (this._modalService.currentOpenedCard$.value === null) {
        this._modalService.currentOpenedCard$.next(state ? this.card : null);
      }
      if (!state) {
        this.animate(false);
        setTimeout(() => {
          this._modalService.currentOpenedCard$.next(this._modalService.currentFocusCard$.value);
        }, 200);
        //trigger anim out & this._modalService.currentOpenedCard$.next(null);
      }
    });
    this._modalService.currentOpenedCard$
      .pipe(takeUntil(this._destroy$), debounceTime(25), distinctUntilChanged())
      .subscribe((card) => {
        this.isCurrentOpenedCard$.next(this.isHovered$.value && card?.guid === this.card.guid);
      });
    this.isCurrentOpenedCard$
      .pipe(takeUntil(this._destroy$), debounceTime(25), distinctUntilChanged())
      .subscribe((state) => {
        if (state) {
          this.animate(true);
        }
      });
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }
  animate(state: boolean) {
    const keyframes: PropertyIndexedKeyframes = state
      ? // ? {
        //     transform: `scale(1.25)`
        //   }
        // : { transform: `none` };
        {
          width: `135%`,
          height: `135%`,
          left: '-17.5%',
          top: '-75%'
        }
      : { width: `100%`, height: `100%`, left: '0%', top: '0%' };
    setTimeout(
      () => {
        this._renderer.setStyle(
          this.cardMiniModal.nativeElement.parentElement?.parentElement?.parentElement,
          'z-index',
          state ? 50 : 1
        );
        this._renderer.setStyle(
          this.cardMiniModal.nativeElement.parentElement?.parentElement?.parentElement?.parentElement?.parentElement
            ?.parentElement,
          'z-index',
          state ? 50 : 1
        );
      },
      state ? 150 : 350
    );
    setTimeout(
      () => {
        this._renderer.setStyle(this.cardMiniModal.nativeElement, 'display', state ? 'block' : 'none');
      },
      state ? 150 : 330
    );
    setTimeout(
      () => {
        this._renderer.setStyle(this.cardMiniModalDetails.nativeElement, 'display', state ? 'flex' : 'none');
      },
      state ? 150 : 295
    );

    this.cardMiniModal.nativeElement.animate(keyframes, {
      duration: 200,
      delay: 150,
      iterations: 1,
      fill: 'forwards',
      easing: 'ease-in-out'
    });
  }
}
