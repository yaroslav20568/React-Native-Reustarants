import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICoordinate, IDirectionRouteGeometry } from '../../types';

interface IDirectionRoute {
	geometry: IDirectionRouteGeometry;
	distance: number;
	duration: number;
}

interface IDirectionRouteResp {
	routes: Array<IDirectionRoute>;
}

interface IPayload {
  restaurantCoords: ICoordinate;
	userCoords: ICoordinate;
}

const directionRouteApi = createApi({
  reducerPath: 'directionRouteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mapbox.com/directions/v5/',
  }),
  endpoints: builder => ({
    getDirectionRoute: builder.query<IDirectionRouteResp, IPayload>({
      query: ({ restaurantCoords, userCoords }) => ({
        url: `mapbox/driving/${restaurantCoords.longitude},${restaurantCoords.latitude};${userCoords.longitude},${userCoords.latitude}?overview=full&geometries=geojson&access_token=${process.env.MAPBOX_API_KEY}`
      })
    })
  })
});

export { directionRouteApi };
export const { useLazyGetDirectionRouteQuery } = directionRouteApi;
