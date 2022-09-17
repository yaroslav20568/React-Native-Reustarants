import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFood } from './../../types';

interface IPayload {
	isChecked: boolean;
	item: IFood;
}

interface IState {
	items: Array<IFood>;
	totalPrice: number;
}

const initialState:IState = {
	items: [],
	totalPrice: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IPayload>) {
			if(action.payload.isChecked) {
				state.items = [...state.items, action.payload.item];
			} else {
				state.items = state.items.filter(item => item.id !== action.payload.item.id);
			}
			state.totalPrice = state.items.reduce((acc, item) => acc + Number(item.price.replace('$', '')), 0);
		}
	}
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;