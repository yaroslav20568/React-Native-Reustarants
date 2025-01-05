import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { CartModalButton, CartModalList } from '../importComponents';
import { IFood } from '../../types';
import { useActions } from '../../redux/typedHooks';
import { CartModalOutside, CartModalRestaurantName, CartModalStyle, CartModalSubtotalText, CartModalSubtotalWrapper, ViewCartWrapper } from './styles'

interface PropsCartModal {
	restaurantName: string | undefined;
	onCloseModal: () => void;
	cartItems: Array<IFood>;
	totalPrice: number;
}

const CartModal = ({ restaurantName, onCloseModal, cartItems, totalPrice }: PropsCartModal) => {
	const [autoplayBool, setAutoPlayBool] = useState<boolean>(false);
	const navigation:any = useNavigation();
	const { clearCart } = useActions();

	const checkoutComplete = () => {
		setAutoPlayBool(true);
		setTimeout(() => {
			setAutoPlayBool(false);
			onCloseModal();
			setTimeout(() => {
				navigation.navigate('OrderCompleted', {
					restaurantName,
					cartItems,
					totalPrice
				});
				clearCart();
			}, 400);
		}, 2000);
	};
	
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