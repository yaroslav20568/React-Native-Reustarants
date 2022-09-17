import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { COLORS } from '../../constants';
import { Line, MenuItems, Modal, RestaurantInfo, ViewCart } from '../../components/importComponents';
import { useActions, useAppSelector } from '../../redux/typedHooks';
import { IFood } from './../../types';

interface IPayload {
	isChecked: boolean;
	item: IFood;
}

const ViewCartWrapper = styled.View`
	position: absolute;
	z-index: 10;
	bottom: 60;
	paddingHorizontal: 60;
	width: 100%;
	// background: #999;
`;

const RestaurantDetailScreen = () => {
  const route: any = useRoute();

	const [modalIsOpen, setModalIsOpen] = useState(false);

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

	const onOpenModal = useCallback(() => {
		setModalIsOpen(true);
	}, []);

	const onCloseModal = useCallback(() => {
		setModalIsOpen(false);
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

			{modalIsOpen && 
				<Modal 
					RestaurantName={route.params.name} 
					onCloseModal={onCloseModal} 
					cartItems={cartItems}
					totalPrice={totalPrice}
				/>}
			{totalPrice !== 0 && 
				<ViewCartWrapper>
					<ViewCart 
						title="View Cart" 
						totalPrice={totalPrice} 
						onCallback={onOpenModal} 
					/>
				</ViewCartWrapper>}
		</View>
  )
}

export default RestaurantDetailScreen;