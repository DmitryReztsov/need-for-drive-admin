import {api, DEFAULT_PARAMS, headers} from '../Api';
import {IOrder} from '../../models/IOrder';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IResponse} from '../../models/IResponse';
import {ICar} from '../../models/ICar';

export interface IOrderQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'createdAt[$gt]'?: number,
  'carId[id]'?: string,
  'cityId[id]'?: string,
  'orderStatusId[id]'?: string,
}


export const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<IResponse<IOrder[]>, IOrderQueryParams>({
      query: (params) => ({
        url: PATHS.ORDER,
        params: {
          'sort[createdAt]': '-1',
          limit: DEFAULT_PARAMS.LIMIT,
          ...params,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, data: response.data};
      },
      providesTags: (result) => ['Order'],
    }),
  }),
  overrideExisting: false,
});
