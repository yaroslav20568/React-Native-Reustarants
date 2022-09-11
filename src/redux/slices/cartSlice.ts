import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IFood {
	id: number,
	title: string,
	description: string,
	price: string,
	image: string
}

interface IPayload {
	isChecked: boolean;
	item: IFood;
}

interface IState {
	items: Array<IFood>;
}

const initialState:IState = {
	items: []
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
		}
	}
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;