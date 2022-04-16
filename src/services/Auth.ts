import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {API_KEY, BASE_URL, SECRET} from '../utils/config';
import {IToken} from '../models/IToken';
import {ICredentials} from '../models/ICredentials';

const loginToken = btoa(`127a2d:${SECRET}`);

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL + '/auth'}),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    authLogin: build.mutation<IToken, ICredentials>({
      query: (credentials) => ({
        url: '/login',
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
        url: '/logout',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Api-Factory-Application-Id': API_KEY,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});
