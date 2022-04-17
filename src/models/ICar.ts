import {IThumbnail} from './IThumbnail';
import {ICategory} from './ICategory';

export interface ICar {
  updatedAt: number,
  createdAt: number,
  description: string,
  priceMin: number,
  priceMax: number,
  name: string,
  number: string,
  categoryId: ICategory,
  thumbnail: IThumbnail,
  tank: number,
  colors: string [],
  id: string,
}
