import {ICity} from './ICity';
import {ICar} from './ICar';
import {IPoint} from './IPoint';
import {IOrderStatus} from './IOrderStatus';

export interface IOrder {
  [key: string]: any,
  updatedAt: number,
  createdAt: number,
  orderStatusId: IOrderStatus | null,
  cityId: ICity | null,
  pointId: IPoint | null,
  carId: ICar | null,
  color: string,
  dateFrom: number,
  dateTo: number,
  rateId: string | null,
  price: number,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
  id: string,
}
