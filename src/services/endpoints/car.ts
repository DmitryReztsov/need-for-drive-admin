import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICar} from '../../models/ICar';
import {IResponse} from '../../models/IResponse';
import {IPutQuery} from '../../models/IPutQuery';

export interface ICarQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'categoryId[id]'?: string,
  color?: string,
}

export const carApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<IResponse<ICar[]>, ICarQueryParams>({
      query: (params) => ({
        url: PATHS.CAR,
        params: {
          'sort[createdAt]': '-1',
          limit: DEFAULT_PARAMS.LIMIT,
          ...params,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, data: response.data};
      },
      providesTags: (result) => ['Car'],
    }),
    getCar: build.query<ICar, string>({
      query: (id) => ({
        url: PATHS.CAR + `/${id}`,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Car'],
    }),
    postCar: build.mutation<ICar, ICar>({
      query: (body) => ({
        url: PATHS.CAR,
        method: 'POST',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Car'],
    }),
    putCar: build.mutation<ICar, IPutQuery<ICar>>({
      query: ({id, body}) => ({
        url: PATHS.CAR + `/${id}`,
        method: 'PUT',
        body,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Car'],
    }),
    deleteCar: build.mutation<ICar, string>({
      query: (id) => ({
        url: PATHS.CAR + `/${id}`,
        method: 'DELETE',
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Car'],
    }),
  }),
  overrideExisting: false,
});
