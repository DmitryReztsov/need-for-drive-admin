import {api, loginToken} from '../Api';
import {PATHS} from '../paths';
import {IToken} from '../../models/IToken';
import {ICredentials} from '../../models/ICredentials';
import {API_KEY} from '../../utils/config';

export const authApi = api.injectEndpoints({
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
  }),
  overrideExisting: false,
});
