import { Card } from './card.type';

export interface BrowseLayout {
  guid: string;
  mainCards: Card[];
  lists: {
    guid: string;
    name: string;
    cards: Card[];
  }[];
}
