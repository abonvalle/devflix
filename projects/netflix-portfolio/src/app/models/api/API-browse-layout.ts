export interface APIBrowseLayout {
  guid: string;
  headerCardsGuids: string[];
  lists: {
    guid: string;
    name: string;
    order: number;
    type: 'classic' | 'top' | 'highlight' | 'pending';
    cardsGuids: string[];
  }[];
}
