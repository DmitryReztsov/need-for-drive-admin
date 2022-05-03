import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IRateType} from '../../models/IRateType';
import {IResponse} from '../../models/IResponse';
import {IPutQuery} from '../../models/IPutQuery';

export interface IRateTypeQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
}

export const rateTypeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRateTypes: build.query<IResponse<IRateType[]>, IRateTypeQueryParams>({
      query: (params) => ({
        url: PATHS.RATE_TYPE,
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
      providesTags: (result) => ['RateType'],
    }),
    getRateType: build.query<IRateType, string>({
      query: (id) => ({
        url: PATHS.RATE_TYPE + `/${id}`,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['RateType'],
    }),
    postRateType: build.mutation<IRateType, IRateType>({
      query: (body) => ({
        url: PATHS.RATE_TYPE,
        method: 'POST',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['RateType'],
    }),
    putRateType: build.mutation<IRateType, IPutQuery<IRateType>>({
      query: ({id, body}) => ({
        url: PATHS.RATE_TYPE + `/${id}`,
        method: 'PUT',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['RateType'],
    }),
    deleteRateType: build.mutation<IRateType, string>({
      query: (id) => ({
        url: PATHS.RATE_TYPE + `/${id}`,
        method: 'DELETE',
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['RateType'],
    }),
  }),
  overrideExisting: false,
});
