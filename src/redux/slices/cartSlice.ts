import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFood, IOnAddToCartPayload } from './../../types';

interface IState {
	items: Array<IFood>;
	totalPrice: number;
}

const initialState: IState = {
	items: [],
	totalPrice: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IOnAddToCartPayload>) {
			if(action.payload.isChecked) {
				state.items = [...state.items, action.payload.item];
			} else {
				state.items = state.items.filter(item => item.name !== action.payload.item.name);
			}
			state.totalPrice = state.items.reduce((acc, item) => acc + Number(item.price.replace('$', '')), 0);
		},
		clearCart(state) {
			state.items = [];
			state.totalPrice = 0;
		}
	}
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;