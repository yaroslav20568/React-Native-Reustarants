import React from 'react';
import { Container, ButtonText, ButtonPrice } from './styles';

interface PropsCartModalButton {
	title: string,
	totalPrice: number,
	onCallback: () => void
}

const CartModalButton = ({ title, totalPrice, onCallback }: PropsCartModalButton) => {
	return (
		<Container 
			activeOpacity={.7}
			onPress={onCallback}
		>
			<ButtonText>{title}</ButtonText>
			<ButtonPrice>${(totalPrice)}</ButtonPrice>
		</Container>
	)
}

export default CartModalButton;