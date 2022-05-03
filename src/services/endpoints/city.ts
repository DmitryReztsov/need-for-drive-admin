import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IResponse} from '../../models/IResponse';
import {ICity} from '../../models/ICity';
import {IPutQuery} from '../../models/IPutQuery';

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
    postCity: build.mutation<ICity, ICity>({
      query: (body) => ({
        url: PATHS.CITY,
        method: 'POST',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['City'],
    }),
    putCity: build.mutation<ICity, IPutQuery<ICity>>({
      query: ({id, body}) => ({
        url: PATHS.CITY + `/${id}`,
        method: 'PUT',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['City'],
    }),
    deleteCity: build.mutation<ICity, string>({
      query: (id) => ({
        url: PATHS.CITY + `/${id}`,
        method: 'DELETE',
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['City'],
    }),
  }),
  overrideExisting: false,
});
