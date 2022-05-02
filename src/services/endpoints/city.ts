import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICity} from '../../models/ICity';
import {IResponse} from '../../models/IResponse';

export interface ICityQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
}


export const cityApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<IResponse<ICity[]>, ICityQueryParams>({
      query: (params) => ({
        url: PATHS.CITY,
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
      providesTags: (result) => ['City'],
    }),
    getCity: build.query<ICity, string>({
      query: (id) => ({
        url: PATHS.CITY + `/${id}`,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['City'],
    }),
  }),
  overrideExisting: false,
});
