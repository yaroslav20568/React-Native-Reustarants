import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YELP_API_KEY } from '../../constants';

interface IRestaurant {
  image_url: string,
  name: string,
  rating: number,
  price: string
}

interface IRestaurantsResp {
  businesses: Array<IRestaurant>,
  region: object,
  total: number
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
    baseUrl: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/',
  }),
  endpoints: builder => ({
    getRestaurants: builder.query<IRestaurantsResp, ''>({
      query: () => ({
        url: 'businesses/search?term=restaurants&location=SanDiego',
        headers: headers,
      }),
    }),
  }),
});

export {restaurantsApi};
export const {useGetRestaurantsQuery} = restaurantsApi;
