import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IPoint} from '../../models/IPoint';

export interface IPointQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'cityId[id]'?: string,
}

export interface IPointResponse {
  count: number,
  points: IPoint [],
}

export const pointApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPoints: build.query<IPointResponse, IPointQueryParams>({
      query: (params) => ({
        url: PATHS.POINT,
        params: {
          'sort[name]': '1',
          limit: DEFAULT_PARAMS.LIMIT,
          ...params,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, points: response.data};
      },
      providesTags: (result) => ['Point'],
    }),
  }),
  overrideExisting: false,
});
