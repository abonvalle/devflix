import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '@modules/shared/components/button/button.component';
import { InputComponent } from '@modules/shared/components/input/input.component';
import { TitleComponent } from '@modules/shared/components/title/title.component';
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), TitleComponent, InputComponent, ButtonComponent, SignInComponent]
})
export class SignInModule {}
