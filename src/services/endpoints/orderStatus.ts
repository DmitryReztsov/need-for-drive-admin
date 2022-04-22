import {api, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IOrderStatus} from '../../models/IOrderStatus';

export const orderStatusApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrderStatuses: build.query<IOrderStatus [], void>({
      query: () => ({
        url: PATHS.ORDER_STATUS,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['OrderStatus'],
    }),
  }),
  overrideExisting: false,
});
