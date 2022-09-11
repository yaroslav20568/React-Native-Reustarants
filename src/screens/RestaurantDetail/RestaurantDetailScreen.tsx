import React, { useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS } from '../../constants';
import { Image, Line, MenuItems, RestaurantInfo } from '../../components/importComponents';
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
	const cartItems = useAppSelector(state => state.cart.items);

	const onAddToCart = useCallback((obj: IPayload) => {
		addToCart(obj);
	}, []);

	const isItemInCart = useCallback((id: number) => {
		return cartItems.some(cartItem => cartItem.id === id);
	}, []);

  return (
		<ScrollView>
			<RestaurantInfo {...route.params} />
			<Line 
				width={100} 
				height={2} 
				backgroundColor={COLORS.black} 
			/>
			<MenuItems onAddToCart={onAddToCart} isItemInCart={isItemInCart} />
			{/* <View style={{position:'absolute', bottom: 50}}><Text>Button</Text></View> */}
		</ScrollView>
  )
}

export default RestaurantDetailScreen;