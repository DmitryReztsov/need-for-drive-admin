import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IOrderStatus} from '../../models/IOrderStatus';

export interface IOrderStatusQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
}

export interface IOrderStatusResponse {
  count: number,
  orderStatuses: IOrderStatus [],
}

export const orderStatusApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrderStatuses: build.query<IOrderStatusResponse, IOrderStatusQueryParams>({
      query: (params) => ({
        url: PATHS.ORDER_STATUS,
        params: {
          'sort[name]': '1',
          limit: DEFAULT_PARAMS.LIMIT,
          ...params,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, orderStatuses: response.data};
      },
      providesTags: (result) => ['OrderStatus'],
    }),
  }),
  overrideExisting: false,
});
