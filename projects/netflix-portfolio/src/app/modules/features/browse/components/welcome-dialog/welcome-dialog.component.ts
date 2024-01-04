import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './welcome-dialog.component.html',
  styleUrl: './welcome-dialog.component.scss'
})
export class WelcomeDialogComponent {}
