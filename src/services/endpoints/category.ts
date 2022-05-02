import {api, DEFAULT_PARAMS, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICategory} from '../../models/ICategory';
import {IResponse} from '../../models/IResponse';

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
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => {
        return {count: response.count, data: response.data};
      },
      providesTags: (result) => ['Category'],
    }),
  }),
  overrideExisting: false,
});
