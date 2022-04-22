import {api, headers} from '../Api';
import {IOrder} from '../../models/IOrder';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<IOrder [], Void<number>>({
      query: (limit) => ({
        url: PATHS.ORDER,
        params: {
          'sort[createdAt]': '-1',
          limit,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Order'],
    }),
  }),
  overrideExisting: false,
});
