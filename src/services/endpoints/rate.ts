import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {IRate} from '../../models/IRate';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export interface IRateQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'rateTypeId[id]'?: string,
}

export interface IRateResponse {
  count: number,
  rates: IRate [],
}

export const rateApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRates: build.query<IRateResponse, IRateQueryParams>({
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
        return {count: response.count, rates: response.data};
      },
      providesTags: (result) => ['Rate'],
    }),
  }),
  overrideExisting: false,
});
