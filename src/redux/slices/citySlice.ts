import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IState {
  cityName: string;
}

const initialState: IState = {
  cityName: '',
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.cityName = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
