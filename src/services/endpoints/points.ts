import {api, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {IPoint} from '../../models/IPoint';

export const pointApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<IPoint[], void>({
      query: () => ({
        url: PATHS.POINT,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Point'],
    }),
  }),
  overrideExisting: false,
});
