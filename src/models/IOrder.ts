import {ICity} from './ICity';
import {ICar} from './ICar';
import {IPoint} from './IPoint';
import {IOrderStatus} from './IOrderStatus';
import {IRate} from './IRate';
import {ICategory} from './ICategory';
import {IRateType} from './IRateType';

export interface IOrder {
  [key: string]: any,
  updatedAt: number,
  createdAt: number,
  orderStatusId: IOrderStatus | null,
  cityId: ICity | null,
  pointId: IPoint | null,
  carId: ICar | null,
  categoryId: ICategory | null,
  rateTypeId: IRateType | null,
  color: string,
  dateFrom: number,
  dateTo: number,
  rateId: IRate | null,
  price: number,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
  id: string,
}
