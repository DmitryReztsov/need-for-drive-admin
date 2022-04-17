import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {API_KEY, BASE_URL, SECRET} from '../utils/config';
import {IToken} from '../models/IToken';
import {ICredentials} from '../models/ICredentials';
import {getToken} from '../utils/localStorage';
import {IRate} from '../models/IRate';

const loginToken = btoa(`127a2d:${SECRET}`);
const accessToken = getToken();

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Auth', 'Rate'],
  endpoints: (build) => ({
    authLogin: build.mutation<IToken, ICredentials>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
        headers: {
          Authorization: `Basic ${loginToken}`,
          'X-Api-Factory-Application-Id': API_KEY,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    authLogout: build.mutation<null, string>({
      query: (token) => ({
        url: '/auth/logout',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Api-Factory-Application-Id': API_KEY,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    getRate: build.query<IRate, string>({
      query: (id) => ({
        url: `/db/rate/${id}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'X-Api-Factory-Application-Id': API_KEY,
        },
      }),
      providesTags: (result) => ['Rate'],
    }),
  }),
});
