import { ListsType } from '../lists.type';

export interface APIBrowseLayout {
  guid: string;
  headerCardsGuids: string[];
  lists: {
    guid: string;
    name: string;
    order: number;
    type: ListsType;
    cardsGuids: string[];
  }[];
}
