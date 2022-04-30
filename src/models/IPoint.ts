import {ICity} from './ICity';

export interface IPoint {
  [key: string]: any,
  name: string,
  address: string,
  cityId: ICity,
  id: string,
}
