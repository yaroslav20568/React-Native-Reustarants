import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICountry } from './../../types';

const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v2/',
  }),
  endpoints: builder => ({
    getCountries: builder.query<Array<ICountry>, null>({
      query: () => ({
        url: `all?status=true&fields=name,callingCodes,alpha2Code,flag`
      })
    })
  })
});

export { countriesApi };
export const { useGetCountriesQuery } = countriesApi;
