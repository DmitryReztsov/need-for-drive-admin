import {IRateType} from './IRateType';

export interface IRate {
  [key: string]: any,
  updatedAt: number,
  createdAt: number,
  price: number,
  rateTypeId: IRateType,
  id: string,
}
