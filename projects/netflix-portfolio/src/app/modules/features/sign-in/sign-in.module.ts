import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { InputComponent } from '@modules/shared/input/input.component';
import { TitleComponent } from '@modules/shared/title/title.component';
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TitleComponent, InputComponent, ButtonComponent]
})
export class SignInModule {}
