import {api, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICity} from '../../models/ICity';

export const cityApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<ICity [], void>({
      query: () => ({
        url: PATHS.CITY,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['City'],
    }),
  }),
  overrideExisting: false,
});
