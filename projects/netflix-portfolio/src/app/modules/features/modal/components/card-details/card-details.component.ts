import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieCard, SerieCard } from '@models/card.interface';
import { Card } from '@models/card.type';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  get card() {
    return this.data.card;
  }
  get isMovieCard(): boolean {
    return this.card.type === 'movie';
  }
  get isSerieCard(): boolean {
    return this.card.type === 'serie';
  }
  get stackToString(): string {
    return (
      this.card.stack?.map((stack) => (stack.version ? `${stack.name} ${stack.version}` : stack.name)).join(', ') ?? ''
    );
  }

  get tags(): string {
    return this.card?.tags?.join(', ');
  }
  get episods() {
    return this.isSerieCard ? (this.card as SerieCard).episods : null;
  }
  relatedCards$: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>([]);
  constructor(
    public dialogRef: MatDialogRef<CardDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { card: Card }
  ) {}
  ngOnInit(): void {
    this.setRelatedCards();
  }

  close() {
    this.dialogRef.close();
  }
  async setRelatedCards() {
    let cards = await Promise.all(
      this.card.related.map(
        (cardGuid) =>
          axios.get(`assets/jsons/cards/${cardGuid}.json`).then(
            (a) => a.data,
            () => null
          ) as Promise<Card | null>
      )
    );
    cards = cards.filter((card) => card !== null);
    this.relatedCards$.next(cards as Card[]);
  }
  durationInfo(card: Card): string {
    return this.isMovieCard ? (card as MovieCard).duration : (card as SerieCard).seasons;
  }
}
