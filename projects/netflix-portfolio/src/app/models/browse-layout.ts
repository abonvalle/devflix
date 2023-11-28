import { Card } from './card.interface';

export interface BrowseLayout {
  guid: string;
  mainCards: Card[];
  lists: {
    guid: string;
    name: string;
    cards: Card[];
  }[];
}
