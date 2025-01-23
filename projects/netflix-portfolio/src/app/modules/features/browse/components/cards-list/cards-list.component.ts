import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  input
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDetailsComponent } from '@features/modal/components/card-details/card-details.component';
import { Card } from '@models/card.type';
import { ListsType } from '@models/lists.type';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { NgFor, NgClass, AsyncPipe } from '@angular/common';
import { CardsComponent } from '../../../../shared/components/cards/cards.component';

@Component({
    selector: 'app-cards-list',
    templateUrl: './cards-list.component.html',
    styleUrls: ['./cards-list.component.scss'],
    imports: [NgFor, NgClass, CardsComponent, AsyncPipe]
})
export class CardsListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('slides') slides!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('sliderFrame') sliderFrame!: ElementRef<HTMLElement>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLElement>;
  readonly cards = input.required<Card[]>();
  readonly type = input.required<ListsType>();
  readonly name = input.required<string>();
  isHover$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  currentSliderCount = 0;
  showCount = 6;
  controlsWidth = 55;
  scollWidth = 0;
  hasFullyScroll: boolean = false;
  nbSlide$ = new BehaviorSubject(0);
  slides$ = new BehaviorSubject<unknown[]>([]);
  private _destroy$ = new Subject();
  get isTop() {
    return this.type() === 'top';
  }
  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.nbSlide$.pipe(takeUntil(this._destroy$)).subscribe((nb) => this.slides$.next(new Array(nb)));
    this.calculateFrame();
  }
  ngAfterViewInit(): void {
    this.init();
  }
  ngOnDestroy(): void {}
  openCardDetails(card: Card) {
    this.dialog.closeAll();
    this.dialog.open(CardDetailsComponent, {
      data: { card },
      maxWidth: '100vw',
      height: '100%',
      panelClass: ['!mt-0', 'sm:!mt-[28px]']
    });
  }
  calculateFrame() {
    let windowWidth = window.innerWidth;
    this.controlsWidth = Math.round(4 * windowWidth) / 100;

    if (windowWidth < 500) {
      this.showCount = 2;
    } else if (windowWidth < 800) {
      this.showCount = 3;
    } else if (windowWidth < 1100) {
      this.showCount = 4;
    } else if (windowWidth < 1400) {
      this.showCount = 5;
    } else {
      this.showCount = 6;
    }
    this.nbSlide$.next(Math.ceil(this.cards().length / this.showCount));
  }
  @HostListener('window:resize')
  init() {
    this.calculateFrame();

    let windowWidth = window.innerWidth;

    if (this.showCount >= this.cards().length) {
      this.renderer.addClass(this.sliderFrame.nativeElement.firstElementChild, 'disabled');
      this.renderer.addClass(this.sliderFrame.nativeElement.children[1], 'disabled');
      this.renderer.addClass(this.sliderFrame.nativeElement.children[2], 'disabled');
    } else {
      this.renderer.removeClass(this.sliderFrame.nativeElement.firstElementChild, 'disabled');
      this.renderer.removeClass(this.sliderFrame.nativeElement.children[1], 'disabled');
      this.renderer.removeClass(this.sliderFrame.nativeElement.children[2], 'disabled');
    }
    this.hideLeftBtn();

    let videoWidth = (windowWidth - this.controlsWidth * 2) / this.showCount;
    videoWidth = Math.round(videoWidth * 10) / 10;
    let videoHeight = this.isTop ? Math.round(videoWidth / (9 / 16) / 2.6) : Math.round(videoWidth / (16 / 9));

    // let videoWidthDiff = videoWidth * this.scaling - videoWidth;
    // let videoHeightDiff = videoHeight * this.scaling - videoHeight;

    this.renderer.setStyle(this.sliderFrame.nativeElement, 'width', `${windowWidth}px`);
    this.renderer.setStyle(this.sliderFrame.nativeElement, 'height', `${videoHeight}px`);

    this.renderer.setStyle(this.sliderContainer.nativeElement, 'height', `${videoHeight}px`);
    this.renderer.setStyle(this.sliderContainer.nativeElement, 'width', `${videoWidth * this.cards().length}px`);
    // this.renderer.setStyle(this.sliderContainer.nativeElement, 'top', `${videoHeightDiff / 2}px`);
    this.renderer.setStyle(this.sliderContainer.nativeElement, 'margin-left', `${this.controlsWidth}px`);

    this.slides.forEach((slide) => {
      this.renderer.setStyle(slide.nativeElement, 'height', `${videoHeight}px`);
      this.renderer.setStyle(slide.nativeElement, 'width', `${videoWidth}px`);
    });
  }

  next() {
    this.scollWidth = this.scollWidth + window.innerWidth - this.controlsWidth * 2;

    if (this.currentSliderCount >= this.nbSlide$.value - 1) {
      this.renderer.setStyle(this.sliderContainer.nativeElement, 'left', 0);
      this.currentSliderCount = 0;
      this.scollWidth = 0;
      this.hasFullyScroll = true;
    } else {
      this.currentSliderCount++;
    }
    this.animate();
    this.hideLeftBtn();
  }
  prev() {
    if (this.currentSliderCount <= 0) {
      this.scollWidth = (window.innerWidth - this.controlsWidth * 2) * (this.nbSlide$.value - 1);
      this.currentSliderCount = this.nbSlide$.value - 1;
    } else {
      this.scollWidth -= this.scollWidth / this.currentSliderCount;
      this.currentSliderCount--;
    }
    this.animate();
    this.hideLeftBtn();
  }
  animate() {
    this.sliderContainer.nativeElement.animate(
      {
        left: `-${this.scollWidth}px`
      },
      {
        duration: 500,
        iterations: 1,
        fill: 'forwards',
        easing: 'ease-out'
      }
    );
  }
  hideLeftBtn() {
    if ((this.currentSliderCount === 0 && !this.hasFullyScroll) || this.showCount >= this.cards().length) {
      this.renderer.addClass(this.sliderFrame.nativeElement.firstElementChild, 'disabled');
    } else {
      this.renderer.removeClass(this.sliderFrame.nativeElement.firstElementChild, 'disabled');
    }
  }
}
