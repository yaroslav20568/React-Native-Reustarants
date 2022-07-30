import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  name: string
}

const initialState: IState = {
  name: 'Delivery'
}

const shippingMethodSlice = createSlice({
  name: 'shippingMethod',
  initialState,
  reducers: {
	setShippingMethod(state, action: PayloadAction<string>) {
	  state.name = action.payload;
	}
  }
});

export const { setShippingMethod } = shippingMethodSlice.actions;
export default shippingMethodSlice.reducer;