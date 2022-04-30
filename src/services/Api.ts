import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {API_KEY, BASE_URL, SECRET} from '../utils/config';
import {getToken} from '../utils/localStorage';

export const loginToken = btoa(`127a2d:${SECRET}`);
export const accessToken = getToken();
export const headers = {
  Authorization: `Bearer ${accessToken}`,
  'X-Api-Factory-Application-Id': API_KEY,
};
export enum DEFAULT_PARAMS {
  LIMIT = 5,
}

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: [
    'Auth', 'Order', 'Rate',
    'RateType', 'Car', 'City',
    'Point', 'OrderStatus', 'Category',
  ],
  endpoints: (build) => ({
  }),
});
