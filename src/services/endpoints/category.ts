import {api, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICategory} from '../../models/ICategory';

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<ICategory [], void>({
      query: () => ({
        url: PATHS.CATEGORY,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Category'],
    }),
  }),
  overrideExisting: false,
});
