import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {IRate} from '../../models/IRate';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IResponse} from '../../models/IResponse';

export interface IRateQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'rateTypeId[id]'?: string,
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
  }),
  overrideExisting: false,
});
