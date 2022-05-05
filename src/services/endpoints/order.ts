import {api, DEFAULT_PARAMS} from '../Api';
import {IOrder} from '../../models/IOrder';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IResponse} from '../../models/IResponse';
import {IPutQuery} from '../../models/IPutQuery';

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
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, data: response.data};
      },
      providesTags: (result) => ['Order'],
    }),
    getOrder: build.query<IOrder, string>({
      query: (id) => ({
        url: PATHS.ORDER + `/${id}`,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Order'],
    }),
    postOrder: build.mutation<IOrder, IOrder>({
      query: (body) => ({
        url: PATHS.ORDER,
        method: 'POST',
        body,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Order'],
    }),
    putOrder: build.mutation<IOrder, IPutQuery<IOrder>>({
      query: ({id, body}) => ({
        url: PATHS.ORDER + `/${id}`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Order'],
    }),
    deleteOrder: build.mutation<IOrder, string>({
      query: (id) => ({
        url: PATHS.ORDER + `/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Order'],
    }),
  }),
  overrideExisting: false,
});
