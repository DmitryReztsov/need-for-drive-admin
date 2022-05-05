import {api, DEFAULT_PARAMS} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IPoint} from '../../models/IPoint';
import {IResponse} from '../../models/IResponse';
import {IPutQuery} from '../../models/IPutQuery';

export interface IPointQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
  'cityId[id]'?: string,
}


export const pointApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPoints: build.query<IResponse<IPoint[]>, IPointQueryParams>({
      query: (params) => ({
        url: PATHS.POINT,
        params: {
          'sort[name]': '1',
          limit: DEFAULT_PARAMS.LIMIT,
          ...params,
        },
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, data: response.data};
      },
      providesTags: (result) => ['Point'],
    }),
    getPoint: build.query<IPoint, string>({
      query: (id) => ({
        url: PATHS.POINT + `/${id}`,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Point'],
    }),
    postPoint: build.mutation<IPoint, IPoint>({
      query: (body) => ({
        url: PATHS.POINT,
        method: 'POST',
        body,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Point'],
    }),
    putPoint: build.mutation<IPoint, IPutQuery<IPoint>>({
      query: ({id, body}) => ({
        url: PATHS.POINT + `/${id}`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Point'],
    }),
    deletePoint: build.mutation<IPoint, string>({
      query: (id) => ({
        url: PATHS.POINT + `/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Point'],
    }),
  }),
  overrideExisting: false,
});
