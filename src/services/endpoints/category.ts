import {api, DEFAULT_PARAMS} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICategory} from '../../models/ICategory';
import {IResponse} from '../../models/IResponse';
import {IPutQuery} from '../../models/IPutQuery';

export interface ICategoryQueryParams {
  [key: string]: any,
  page?: number,
  limit?: number,
}

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<IResponse<ICategory[]>, ICategoryQueryParams>({
      query: (params) => ({
        url: PATHS.CATEGORY,
        params: {
          'sort[name]': '1',
          limit: DEFAULT_PARAMS.LIMIT,
          ...params,
        },
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, data: response.data};
      },
      providesTags: (result) => ['Category'],
    }),
    getCategory: build.query<ICategory, string>({
      query: (id) => ({
        url: PATHS.CATEGORY + `/${id}`,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Category'],
    }),
    postCategory: build.mutation<ICategory, ICategory>({
      query: (body) => ({
        url: PATHS.CATEGORY,
        method: 'POST',
        body,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Category'],
    }),
    putCategory: build.mutation<ICategory, IPutQuery<ICategory>>({
      query: ({id, body}) => ({
        url: PATHS.CATEGORY + `/${id}`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Category'],
    }),
    deleteCategory: build.mutation<ICategory, string>({
      query: (id) => ({
        url: PATHS.CATEGORY + `/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      invalidatesTags: ['Category'],
    }),
  }),
  overrideExisting: false,
});
