import {api, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICity} from '../../models/ICity';

export interface ICityQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
}

export interface ICityResponse {
  count: number,
  cities: ICity [],
}

export const cityApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<ICityResponse, ICityQueryParams>({
      query: (params) => ({
        url: PATHS.CITY,
        params: {
          'sort[name]': '1',
          limit: 5,
          ...params,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, cities: response.data};
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
