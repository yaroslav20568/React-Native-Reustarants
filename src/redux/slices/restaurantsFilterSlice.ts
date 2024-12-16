import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IState {
	shippingMethod: string;
  cityName: string;
}

const initialState: IState = {
	shippingMethod: 'Delivery',
  cityName: ''
};

const restaurantsFilterSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
		setShippingMethod(state, action: PayloadAction<string>) {
			state.shippingMethod = action.payload;
		},
    setCity(state, action: PayloadAction<string>) {
      state.cityName = action.payload;
    }
  }
});

export const { setShippingMethod, setCity } = restaurantsFilterSlice.actions;
export default restaurantsFilterSlice.reducer;
