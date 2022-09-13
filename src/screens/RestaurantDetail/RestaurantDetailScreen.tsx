import React, { useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS } from '../../constants';
import { Image, Line, MenuItems, RestaurantInfo, ViewCart } from '../../components/importComponents';
import { useActions, useAppSelector } from '../../redux/typedHooks';

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

const RestaurantDetailScreen = () => {
  const route: any = useRoute();

	const { addToCart } = useActions();
	const { cartItems, totalPrice } = useAppSelector(state => ({
		cartItems: state.cart.items,
		totalPrice: state.cart.totalPrice
	}));

	const onAddToCart = useCallback((obj: IPayload) => {
		addToCart(obj);
	}, []);

	const isItemInCart = useCallback((id: number) => {
		return cartItems.some(cartItem => cartItem.id === id);
	}, []);

  return (
		<View style={{flex: 1}}>
			<ScrollView>
				<RestaurantInfo {...route.params} />
				<Line 
					width={100} 
					height={2} 
					backgroundColor={COLORS.black} 
				/>
				<MenuItems onAddToCart={onAddToCart} isItemInCart={isItemInCart} />
			</ScrollView>

			{totalPrice !== 0 && <ViewCart title="View Cart" totalPrice={totalPrice} />}
		</View>
  )
}

export default RestaurantDetailScreen;