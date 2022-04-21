import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {API_KEY, BASE_URL, SECRET} from '../utils/config';
import {IToken} from '../models/IToken';
import {ICredentials} from '../models/ICredentials';
import {getToken} from '../utils/localStorage';
import {IRate} from '../models/IRate';
import {IOrder} from '../models/IOrder';
import {PATHS} from './paths';
import {BaseQueryResult} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {ICar} from '../models/ICar';
import {ICity} from '../models/ICity';
import {IOrderStatus} from '../models/IOrderStatus';
import {ICategory} from '../models/ICategory';

const loginToken = btoa(`127a2d:${SECRET}`);
const accessToken = getToken();
const headers = {
  Authorization: `Bearer ${accessToken}`,
  'X-Api-Factory-Application-Id': API_KEY,
};

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Auth', 'Order', 'Rate', 'Car', 'City', 'OrderStatus', 'Category'],
  endpoints: (build) => ({
    authLogin: build.mutation<IToken, ICredentials>({
      query: (credentials) => ({
        url: PATHS.LOGIN,
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
        url: PATHS.LOGOUT,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Api-Factory-Application-Id': API_KEY,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    getOrders: build.query<IOrder [], Void<number>>({
      query: (limit) => ({
        url: PATHS.ORDER,
        params: {
          'sort[createdAt]': '-1',
          limit,
        },
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Order'],
    }),
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
    getCategories: build.query<ICategory [], void>({
      query: () => ({
        url: PATHS.CATEGORY,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['Category'],
    }),
    getCities: build.query<ICity [], void>({
      query: () => ({
        url: PATHS.CITY,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['City'],
    }),
    getOrderStatuses: build.query<IOrderStatus [], void>({
      query: () => ({
        url: PATHS.ORDER_STATUS,
        headers,
      }),
      transformResponse: (response: BaseQueryResult<any>) => response.data,
      providesTags: (result) => ['OrderStatus'],
    }),
    getRate: build.query<IRate, string>({
      query: (id) => ({
        url: PATHS.RATE + id,
        headers,
      }),
      providesTags: (result) => ['Rate'],
    }),
  }),
});
