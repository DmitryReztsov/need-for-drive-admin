import {api, headers} from '../Api';
import {PATHS} from '../paths';
import {IRateType} from '../../models/IRateType';

export const rateTypeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRate: build.query<IRateType [], string>({
      query: (id) => ({
        url: PATHS.RATE_TYPE + id,
        headers,
      }),
      providesTags: (result) => ['RateType'],
    }),
  }),
  overrideExisting: false,
});
