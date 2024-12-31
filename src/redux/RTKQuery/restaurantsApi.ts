import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YELP_API_KEY } from '../../constants';
import { IRestaurant, IRestaurantMoreInfo } from './../../types';

interface IRestaurantWithTransactions extends IRestaurant {
  transactions: Array<string>;
}

interface IRestaurantsResp {
  businesses: Array<IRestaurantWithTransactions>;
}

const headers = {
  accept: 'application/json',
  'x-requested-with': 'xmlhttprequest',
  'Access-Control-Allow-Origin': '*',
  Authorization: `Bearer ${YELP_API_KEY}`,
};

const restaurantsApi = createApi({
  reducerPath: 'restaurantsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.yelp.com/v3/',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurantsResp, string>({
      query: (cityName) => ({
        url: `businesses/search?term=restaurants&location=${cityName}`,
        headers: headers
      })
    }),
		getRestaurant: builder.query<IRestaurantMoreInfo, string>({
      query: (id) => ({
        url: `businesses/${id}`,
        headers: headers
      })
    })
  })
});

export { restaurantsApi };
export const { useGetRestaurantsQuery, useGetRestaurantQuery } = restaurantsApi;
