import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartModalButton, CartModalList } from '../../importComponents';
import { ICoordinate, IFood, IUser, TNavigation, IOrderClient, IOrderPrice, IOrderTime, IOrderStatus, IOrder } from '../../../types';
import { OutsideContainer, RestaurantName, Container, SubtotalText, SubtotalWrapper } from './styles';
import { ViewCartWrapper } from '../CartModalButton/styles';

interface PropsCartModal {
	restaurantName: string | undefined;
	onCloseModal: () => void;
	cartItems: Array<IFood>;
	totalPrice: number;
	shippingMethod: string;
	clearCart: () => void;
	restaurantCoords: ICoordinate | undefined;
	restaurantAddress: string | undefined;
}

const CartModal = ({ restaurantName, onCloseModal, cartItems, totalPrice, shippingMethod, clearCart, restaurantCoords, restaurantAddress }: PropsCartModal) => {
	const [autoplayBool, setAutoPlayBool] = useState<boolean>(false);
	const navigation = useNavigation<TNavigation>();

	const checkoutComplete = useCallback(async () => {
		setAutoPlayBool(true);

		const user: IUser = JSON.parse(await AsyncStorage.getItem('user-data') as string);
		const client: IOrderClient = {
			phone: user.phone
		};
		const price: IOrderPrice = {
			items: totalPrice,
		};
		const time: IOrderTime = {
			cooking: 30,
		};
		const status: IOrderStatus = {
			isPaid: false,
			isCooked: false
		};

		if(shippingMethod === 'Delivery') {
			client.address = null;
			price.delivery = null;
			time.delivery = null;
			status.isDelivered = false;
		}

		setTimeout(() => {
			firestore().collection<IOrder>('orders').add({
				restaurant: {
					name: restaurantName as string,
					address: restaurantAddress as string
				},
				items: cartItems,
				shippingMethod,
				client,
				price,
				time,
				status
			})
			.then((order) => {
				setAutoPlayBool(false);
				onCloseModal();
				setTimeout(() => {
					if(shippingMethod === 'Delivery') {
						navigation.navigate('Map', {
							orderId: order.id, 
							restaurantCoords: restaurantCoords as ICoordinate
						});
					} else {
						// navigation.navigate('OrderCompleted', {
						// 	restaurantName,
						// 	cartItems,
						// 	totalPrice
						// });
					}
					clearCart();
				}, 100);
			})
		}, 1000);
	}, [cartItems]);

	return (
		<>
			<OutsideContainer 
				onPress={onCloseModal}
				activeOpacity={1}
			/>
			{autoplayBool && 
				<Lottie 
					source={require('../../../assets/animations/scanner.json')} 
					style={{position: 'absolute', zIndex: 300}} 
					autoPlay={autoplayBool}
					duration={3000}
				/>}
			<Container>
				<ScrollView>
					<RestaurantName>{restaurantName}</RestaurantName>
					<CartModalList 
						cartItems={cartItems} 
					/>
					<SubtotalWrapper>
						<SubtotalText>Subtotal</SubtotalText>
						<SubtotalText>${totalPrice}</SubtotalText>
					</SubtotalWrapper>
					<ViewCartWrapper>
						<CartModalButton 
							title='Checkout' 
							totalPrice={totalPrice} 
							onCallback={checkoutComplete} 
						/>
					</ViewCartWrapper>
				</ScrollView>
			</Container>
		</>
	)
}

export default CartModal;