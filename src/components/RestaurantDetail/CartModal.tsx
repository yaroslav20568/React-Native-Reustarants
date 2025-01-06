import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import { CartModalButton, CartModalList } from '../importComponents';
import { IFood, IUser, TNavigation } from '../../types';
import { CartModalOutside, CartModalRestaurantName, CartModalStyle, CartModalSubtotalText, CartModalSubtotalWrapper, ViewCartWrapper } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PropsCartModal {
	restaurantName: string | undefined;
	onCloseModal: () => void;
	cartItems: Array<IFood>;
	totalPrice: number;
	shippingMethod: string;
	clearCart: () => void;
}

const CartModal = ({ restaurantName, onCloseModal, cartItems, totalPrice, shippingMethod, clearCart }: PropsCartModal) => {
	const [autoplayBool, setAutoPlayBool] = useState<boolean>(false);
	const navigation = useNavigation<TNavigation>();

	const checkoutComplete = useCallback(async () => {
		setAutoPlayBool(true);

		const user: IUser = JSON.parse(await AsyncStorage.getItem('user-data') as string);
		const paramsData = {
			restaurantName,
			cartItems,
			totalPrice
		};

		setTimeout(() => {
			firestore().collection('orders').add({
				...paramsData,
				shippingMethod,
				clientPhone: user.phone,
				isPaid: false,
				isReady: false,
				location: null
			})
			.then(async () => {
				setAutoPlayBool(false);
				onCloseModal();
				setTimeout(() => {
					navigation.navigate('OrderCompleted', paramsData);
					clearCart();
				}, 100);
			})
		}, 1000);
	}, [cartItems]);
	
	return (
		<>
			<CartModalOutside 
				onPress={onCloseModal}
				activeOpacity={1}
			/>
			{autoplayBool && 
				<Lottie 
					source={require('../../assets/animations/scanner.json')} 
					style={{position: 'absolute', zIndex: 300}} 
					autoPlay={autoplayBool}
					duration={3000}
				/>}
			<CartModalStyle>
				<ScrollView>
					<CartModalRestaurantName>{restaurantName}</CartModalRestaurantName>
					<CartModalList 
						cartItems={cartItems} 
					/>
					<CartModalSubtotalWrapper>
						<CartModalSubtotalText>Subtotal</CartModalSubtotalText>
						<CartModalSubtotalText>${totalPrice}</CartModalSubtotalText>
					</CartModalSubtotalWrapper>
					<ViewCartWrapper>
						<CartModalButton 
							title='Checkout' 
							totalPrice={totalPrice} 
							onCallback={checkoutComplete} 
						/>
					</ViewCartWrapper>
				</ScrollView>
			</CartModalStyle>
		</>
	)
}

export default CartModal;