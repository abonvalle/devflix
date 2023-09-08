export interface Card {
  guid: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  year: number;
  seasons: number;
  thumbnailPath: string;
  clipPath: string;
  related: string[];
}
