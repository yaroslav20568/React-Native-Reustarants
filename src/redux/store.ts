import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import { restaurantsApi } from './RTKQuery/restaurantsApi';

const store = configureStore({
  reducer: {
    city: cityReducer,
	[restaurantsApi.reducerPath]: restaurantsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;