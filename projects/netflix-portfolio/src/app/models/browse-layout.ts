import { Card } from './card.type';
import { ListsType } from './lists.type';

export interface BrowseLayout {
  guid: string;
  mainCards: Card[];
  lists: {
    guid: string;
    name: string;
    type: ListsType;
    cards: Card[];
  }[];
}
