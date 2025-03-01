import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/components/title/title.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    imports: [TitleComponent, InputComponent, RouterLink, NgClass]
})
export class SignInComponent {
  hideFooter: boolean = false;
  classes: string[] = [
    'text-[13px]',
    'text-[14px] font-medium',
    'text-[15px] font-semibold',
    'text-[16px] font-semibold',
    'text-[18px] font-semibold text-white',
    'text-[24px] font-bold text-white',
    'text-[24px] font-bold text-white block animate-bounce'
  ];
  currentClassIndex: number = 0;
  get customSizeClass(): string {
    return this.classes[this.currentClassIndex] ?? 'text-[13px]';
  }
  showTheWay() {
    if (this.currentClassIndex < this.classes.length - 1) {
      this.currentClassIndex++;
    } else {
      this.hideFooter = true;
    }
  }
}
