import {api, headers} from '../Api';
import {IOrder} from '../../models/IOrder';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICar} from '../../models/ICar';

export interface ICarQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'categoryId[id]'?: string,
  color?: string,
}

export interface ICarResponse {
  count: number,
  cars: ICar [],
}

export const carApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<ICarResponse, ICarQueryParams>({
      query: (params) => ({
        url: PATHS.CAR,
        params: {
          'sort[createdAt]': '-1',
          limit: 5,
          ...params,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return response && {count: response.count, cars: response.data};
      },
      providesTags: (result) => ['Car'],
    }),
  }),
  overrideExisting: false,
});
