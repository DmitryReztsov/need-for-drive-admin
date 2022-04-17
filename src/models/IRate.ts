import {IRateType} from './IRateType';

export interface IRate {
  updatedAt: number,
  createdAt: number,
  price: number,
  rateTypeId: IRateType,
  id: string,
}
