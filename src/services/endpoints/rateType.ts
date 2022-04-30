import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IRateType} from '../../models/IRateType';

export interface IRateTypeQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
}

export interface IRateTypeResponse {
  count: number,
  rateTypes: IRateType [],
}

export const rateTypeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRateTypes: build.query<IRateTypeResponse, IRateTypeQueryParams>({
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
        return {count: response.count, rateTypes: response.data};
      },
      providesTags: (result) => ['RateType'],
    }),
  }),
  overrideExisting: false,
});
