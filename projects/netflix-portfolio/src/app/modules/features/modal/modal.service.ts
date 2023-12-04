import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../../../models/card.type';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  currentFocusCard$ = new BehaviorSubject<Card | null>(null);
  currentOpenedCard$ = new BehaviorSubject<Card | null>(null);
  constructor() {}
}
