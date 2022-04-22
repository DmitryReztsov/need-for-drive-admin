import {api, headers} from '../Api';
import {IOrder} from '../../models/IOrder';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export interface IOrderQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'createdAt[$gt]'?: number,
  'carId[id]'?: string,
  'cityId[id]'?: string,
  'orderStatusId[id]'?: string,
}

export interface IOrderResponse {
  count: number,
  orders: IOrder [],
}

export const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<IOrderResponse, IOrderQueryParams>({
      query: (params) => ({
        url: PATHS.ORDER,
        params: {
          'sort[createdAt]': '-1',
          limit: 5,
          ...params,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return response && {count: response.count, orders: response.data};
      },
      providesTags: (result) => ['Order'],
    }),
  }),
  overrideExisting: false,
});
