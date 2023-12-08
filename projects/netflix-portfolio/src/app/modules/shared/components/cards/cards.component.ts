import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ModalService } from '@features/modal/modal.service';
import { Card } from '@models/card.type';
import { ListsType } from '@models/lists.type';
import { BehaviorSubject, Subject, debounceTime, takeUntil } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, MatProgressBarModule, SvgIconComponent]
})
export class CardsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cardMiniModal') cardMiniModal!: ElementRef<HTMLElement>;
  @ViewChild('cardMiniModalDetails') cardMiniModalDetails!: ElementRef<HTMLElement>;
  @Input({ required: true }) card!: Card;
  @Input({ required: true }) type!: ListsType;
  @Input({ required: true }) index!: number;
  isHovered$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isCurrentOpenedCard$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  progress: number = 0;
  duration: number = 0;
  timing: number = 0;
  private _destroy$: Subject<void> = new Subject();

  get tags(): string {
    return this.card?.tags?.join(', ');
  }
  get isPending(): boolean {
    return this.type === 'pending';
  }
  get isTop(): boolean {
    return this.type === 'top';
  }
  constructor(
    private _modalService: ModalService,
    private _renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.progress = Math.floor(Math.random() * 90);
    this.duration =
      Math.floor(Math.random() * (this.card?.type === 'movie' ? 60 : 30)) + (this.card?.type === 'movie' ? 90 : 20);
    this.timing = Math.floor((this.duration * this.progress) / 100);
  }

  ngAfterViewInit(): void {
    this.isHovered$.pipe(takeUntil(this._destroy$), debounceTime(100)).subscribe((state) => {
      this._modalService.currentFocusCard$.next(state ? this.card : null);
      if (this._modalService.currentOpenedCard$.value === null) {
        this._modalService.currentOpenedCard$.next(state ? this.card : null);
      }
      if (!state) {
        this.animate(false);
        setTimeout(() => {
          this._modalService.currentOpenedCard$.next(this._modalService.currentFocusCard$.value);
        }, 100);
        //trigger anim out & this._modalService.currentOpenedCard$.next(null);
      }
    });
    this._modalService.currentOpenedCard$.pipe(takeUntil(this._destroy$), debounceTime(100)).subscribe((card) => {
      this.isCurrentOpenedCard$.next(this.isHovered$.value && card?.guid === this.card.guid);
    });
    this.isCurrentOpenedCard$.pipe(takeUntil(this._destroy$), debounceTime(100)).subscribe((state) => {
      if (state) {
        this.animate(true);
      }
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }

  setIsHover(state: boolean) {
    this.isHovered$.next(state);
  }
  animate(state: boolean) {
    if (!this.cardMiniModal?.nativeElement) {
      return;
    }
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
          this.cardMiniModal?.nativeElement?.parentElement?.parentElement?.parentElement,
          'z-index',
          state ? 50 : 1
        );
        this._renderer.setStyle(
          this.cardMiniModal?.nativeElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement
            ?.parentElement,
          'z-index',
          state ? 50 : 1
        );
      },
      state ? 0 : 200
    );
    setTimeout(
      () => {
        this._renderer.setStyle(this.cardMiniModal?.nativeElement, 'display', state ? 'block' : 'none');
      },
      state ? 0 : 180
    );
    setTimeout(
      () => {
        this._renderer.setStyle(this.cardMiniModalDetails?.nativeElement, 'display', state ? 'flex' : 'none');
      },
      state ? 0 : 145
    );

    this.cardMiniModal?.nativeElement?.animate(keyframes, {
      duration: 200,
      delay: 0,
      iterations: 1,
      fill: 'forwards',
      easing: 'ease-in-out'
    });
  }
}
