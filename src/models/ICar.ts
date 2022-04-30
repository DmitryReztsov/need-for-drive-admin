import {IThumbnail} from './IThumbnail';
import {ICategory} from './ICategory';

export interface ICar {
  [key: string]: any,
  updatedAt?: number,
  createdAt?: number,
  description: string,
  priceMin: number,
  priceMax: number,
  name: string,
  number: string,
  categoryId: ICategory | null,
  thumbnail: IThumbnail | null,
  tank: number,
  colors: string [],
  id: string,
}
