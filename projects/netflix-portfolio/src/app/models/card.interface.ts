import { Attribute } from './attribute.interface';
import { stack } from './stack';

export interface Card {
  guid: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  attributes: Attribute[];
  stack: { name: stack; version?: string }[];
  year: number;
  seasons: number;
  thumbnailPath: string;
  clipPath: string;
  related: string[];
  recommended: number;
}
