import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardDetailsComponent } from '@features/modal/components/card-details/card-details.component';
import { Card } from '@models/*';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cards-list2',
  templateUrl: './cards-list2.component.html',
  styleUrls: ['./cards-list2.component.scss']
})
export class CardsList2Component implements AfterViewInit {
  @ViewChildren('slides') slides!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('sliderFrame') sliderFrame!: ElementRef<HTMLElement>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLElement>;
  @Input({ required: true }) cards: Card[] = [];
  @Input({ required: true }) name: string = '';
  isHover$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  currentSliderCount = 0;
  showCount = 6;
  controlsWidth = 55;
  scollWidth = 0;

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog
  ) {}
  openCardDetails(card: Card) {
    this.dialog.closeAll();
    this.dialog.open(CardDetailsComponent, { data: { card }, maxWidth: '100vw' });
  }

  ngAfterViewInit(): void {
    this.init();
  }
  @HostListener('window:resize')
  init() {
    let win = window;
    let windowWidth = win.innerWidth;

    if (windowWidth > 1500) {
      this.showCount = 6;
    } else if (windowWidth > 1200) {
      this.showCount = 5;
    } else if (windowWidth > 950) {
      this.showCount = 4;
    } else if (windowWidth > 768) {
      this.showCount = 3;
    } else {
      this.showCount = 2;
    }

    if (this.showCount >= this.cards.length) {
      this.renderer.addClass(this.sliderFrame.nativeElement.firstElementChild, 'disabled');
      this.renderer.addClass(this.sliderFrame.nativeElement.children[1], 'disabled');
    }
    this.hideLeftBtn();

    let videoWidth = (windowWidth - this.controlsWidth * 2) / this.showCount;
    let videoHeight = Math.round(videoWidth / (16 / 9));

    // let videoWidthDiff = videoWidth * this.scaling - videoWidth;
    // let videoHeightDiff = videoHeight * this.scaling - videoHeight;

    this.renderer.setStyle(this.sliderFrame.nativeElement, 'width', `${windowWidth}px`);
    this.renderer.setStyle(this.sliderFrame.nativeElement, 'height', `${videoHeight}px`);

    this.renderer.setStyle(this.sliderContainer.nativeElement, 'height', `${videoHeight}px`);
    this.renderer.setStyle(this.sliderContainer.nativeElement, 'width', `${videoWidth * this.cards.length}px`);
    // this.renderer.setStyle(this.sliderContainer.nativeElement, 'top', `${videoHeightDiff / 2}px`);
    this.renderer.setStyle(this.sliderContainer.nativeElement, 'margin-left', `${this.controlsWidth}px`);

    this.slides.forEach((slide) => {
      this.renderer.setStyle(slide.nativeElement, 'height', `${videoHeight}px`);
      this.renderer.setStyle(slide.nativeElement, 'width', `${videoWidth}px`);
    });
  }

  next() {
    console.log(this.currentSliderCount, this.cards.length / this.showCount - 1);
    console.log(this.scollWidth);
    this.scollWidth = this.scollWidth + window.innerWidth - this.controlsWidth * 2;

    const nbSlide = this.cards.length / this.showCount;
    if (this.currentSliderCount >= nbSlide - 1) {
      this.renderer.setStyle(this.sliderContainer.nativeElement, 'left', 0);
      this.currentSliderCount = 0;
      this.scollWidth = 0;
    } else {
      this.currentSliderCount++;
    }
    this.animate();
    this.hideLeftBtn();
  }
  prev() {
    console.log(this.currentSliderCount, this.cards.length / this.showCount - 1);
    console.log(this.scollWidth);

    const nbSlide = this.cards.length / this.showCount;
    if (this.currentSliderCount <= 0) {
      this.currentSliderCount = Math.ceil(nbSlide - 1);
      this.scollWidth = (window.innerWidth - this.controlsWidth * 2) * Math.ceil(nbSlide - 1);
    } else {
      this.currentSliderCount--;
      this.scollWidth = this.scollWidth - window.innerWidth + this.controlsWidth * 2;
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
    if (this.currentSliderCount === 0) {
      this.renderer.addClass(this.sliderFrame.nativeElement.firstElementChild, 'disabled');
    } else {
      this.renderer.removeClass(this.sliderFrame.nativeElement.firstElementChild, 'disabled');
    }
  }
}
