import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {API_KEY, BASE_URL, SECRET} from '../utils/config';
import {getToken} from '../utils/localStorage';

export const loginToken = btoa(`127a2d:${SECRET}`);
export enum DEFAULT_PARAMS {
  LIMIT = 5,
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-Api-Factory-Application-Id', API_KEY);
      const token = getToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    'Auth', 'Order', 'Rate',
    'RateType', 'Car', 'City',
    'Point', 'OrderStatus', 'Category',
  ],
  endpoints: (build) => ({
  }),
});
