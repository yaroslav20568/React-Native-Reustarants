import React from 'react';
import { CartModalButtonStyle, CartModalButtonText, CartModalButtonPrice } from './styles';

interface PropsCartModalButton {
	title: string,
	totalPrice: number,
	onCallback: () => void
}

const CartModalButton = ({ title, totalPrice, onCallback }: PropsCartModalButton) => {
	return (
		<CartModalButtonStyle 
			activeOpacity={.7}
			onPress={onCallback}
		>
			<CartModalButtonText>{title}</CartModalButtonText>
			<CartModalButtonPrice>${(totalPrice)}</CartModalButtonPrice>
		</CartModalButtonStyle>
	)
}

export default CartModalButton;