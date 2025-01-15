import { configureStore } from '@reduxjs/toolkit';
import { restaurantsFilterReducer, cartReducer } from './importReducers';
import { restaurantsApi } from './RTKQuery/restaurantsApi';
import { countriesApi } from './RTKQuery/countriesApi';
import { directionRouteApi } from './RTKQuery/directionRouteApi';

const store = configureStore({
  reducer: {
    restaurantsFilter: restaurantsFilterReducer,
		cart: cartReducer,
		[restaurantsApi.reducerPath]: restaurantsApi.reducer,
		[countriesApi.reducerPath]: countriesApi.reducer,
		[directionRouteApi.reducerPath]: directionRouteApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
			restaurantsApi.middleware,
			countriesApi.middleware,
			directionRouteApi.middleware
		)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;