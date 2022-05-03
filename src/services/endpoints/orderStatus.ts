import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IOrderStatus} from '../../models/IOrderStatus';
import {IResponse} from '../../models/IResponse';
import {IPutQuery} from '../../models/IPutQuery';

export interface IOrderStatusQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
}


export const orderStatusApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrderStatuses: build.query<IResponse<IOrderStatus[]>, IOrderStatusQueryParams>({
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
        return {count: response.count, data: response.data};
      },
      providesTags: (result) => ['OrderStatus'],
    }),
    getOrderStatus: build.query<IOrderStatus, string>({
      query: (id) => ({
        url: PATHS.ORDER_STATUS + `/${id}`,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['OrderStatus'],
    }),
    postOrderStatus: build.mutation<IOrderStatus, IOrderStatus>({
      query: (body) => ({
        url: PATHS.ORDER_STATUS,
        method: 'POST',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['OrderStatus'],
    }),
    putOrderStatus: build.mutation<IOrderStatus, IPutQuery<IOrderStatus>>({
      query: ({id, body}) => ({
        url: PATHS.ORDER_STATUS + `/${id}`,
        method: 'PUT',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['OrderStatus'],
    }),
    deleteOrderStatus: build.mutation<IOrderStatus, string>({
      query: (id) => ({
        url: PATHS.ORDER_STATUS + `/${id}`,
        method: 'DELETE',
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['OrderStatus'],
    }),
  }),
  overrideExisting: false,
});
