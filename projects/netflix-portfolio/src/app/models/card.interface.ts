import { Attribute } from './attribute.interface';

export interface GlobalCard {
  guid: string;
  title: string;
  type: 'movie' | 'serie';
  tagline: string;
  description: string;
  tags: string[];
  attributes: Attribute[];
  stack: { name: string; version?: string }[];
  year: number;
  thumbnailPath: string;
  clipPath: string;
  related: string[];
  recommended: number;
}

export interface MovieCard extends GlobalCard {
  duration: string;
}
export interface SerieCard extends GlobalCard {
  seasons: string;
  episods: { title: ''; description: ''; thumbnailPath?: ''; duration?: number }[];
}
