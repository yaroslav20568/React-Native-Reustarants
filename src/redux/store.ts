import { configureStore } from '@reduxjs/toolkit';
import { restaurantsFilterReducer, cartReducer } from './importReducers';
import { restaurantsApi } from './RTKQuery/restaurantsApi';
import { countriesApi } from './RTKQuery/countriesApi';

const store = configureStore({
  reducer: {
    restaurantsFilter: restaurantsFilterReducer,
		cart: cartReducer,
		[restaurantsApi.reducerPath]: restaurantsApi.reducer,
		[countriesApi.reducerPath]: countriesApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantsApi.middleware, countriesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;