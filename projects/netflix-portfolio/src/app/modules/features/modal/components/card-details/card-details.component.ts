import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Card } from '@models/*';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  get card() {
    return this.data.card;
  }
  constructor(
    public dialogRef: MatDialogRef<CardDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { card: Card }
  ) {}
}
