import {api, headers} from '../Api';
import {PATHS} from '../paths';
import {IRate} from '../../models/IRate';

export const rateApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRate: build.query<IRate [], string>({
      query: (id) => ({
        url: PATHS.RATE + id,
        headers,
      }),
      providesTags: (result) => ['Rate'],
    }),
  }),
  overrideExisting: false,
});
