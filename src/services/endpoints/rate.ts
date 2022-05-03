import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {IRate} from '../../models/IRate';
import {IResponse} from '../../models/IResponse';
import {IPutQuery} from '../../models/IPutQuery';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export interface IRateQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'rateId[id]'?: string,
}

export const rateApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRates: build.query<IResponse<IRate[]>, IRateQueryParams>({
      query: (params) => ({
        url: PATHS.RATE,
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
      providesTags: (result) => ['Rate'],
    }),
    getRate: build.query<IRate, string>({
      query: (id) => ({
        url: PATHS.RATE + `/${id}`,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Rate'],
    }),
    postRate: build.mutation<IRate, IRate>({
      query: (body) => ({
        url: PATHS.RATE,
        method: 'POST',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Rate'],
    }),
    putRate: build.mutation<IRate, IPutQuery<IRate>>({
      query: ({id, body}) => ({
        url: PATHS.RATE + `/${id}`,
        method: 'PUT',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Rate'],
    }),
    deleteRate: build.mutation<IRate, string>({
      query: (id) => ({
        url: PATHS.RATE + `/${id}`,
        method: 'DELETE',
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Rate'],
    }),
  }),
  overrideExisting: false,
});
