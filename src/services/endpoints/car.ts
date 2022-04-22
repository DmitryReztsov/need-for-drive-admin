import {api, headers} from '../Api';
import {PATHS} from '../paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICar} from '../../models/ICar';

export const carApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<ICar [], Void<number>>({
      query: (limit) => ({
        url: PATHS.CAR,
        params: {
          limit,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Car'],
    }),
  }),
  overrideExisting: false,
});
