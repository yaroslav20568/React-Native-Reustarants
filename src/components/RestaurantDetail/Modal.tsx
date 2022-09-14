import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Title, Line, ViewCart } from '../importComponents';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';

interface IFood {
	id: number,
	title: string,
	description: string,
	price: string,
	image: string
}

interface IProps {
	RestaurantName: string,
	onCloseModal: () => void,
	cartItems: Array<IFood>,
	totalPrice: number,
}

const ModalMinorContainer = styled.TouchableOpacity`
	position: absolute;
	z-index: 100;
	bottom: 50%;
	width: 100%;
	height: 50%;
	paddingHorizontal: 5;
	paddingVertical: 10;
	backgroundColor: rgba(0, 0, 0, 0.5);
`;

const ModalMainContainer = styled.View`
	position: absolute;
	z-index: 100;
	top: 50%;
	width: 100%;
	height: 50%;
	paddingHorizontal: 10;
	paddingVertical: 15;
	backgroundColor: ${COLORS.white};
	// align-items: center;
`;

const TitleRestaurantWrapper = styled.View`
	align-items: center;
`;

const CartItem = styled.View`
	flex-direction: row;
	justify-content: space-between;
	paddingHorizontal: 20;
	paddingVertical: 20;
`;

const SubtotalContainer = styled.View`
	paddingVertical: 20;
	flex-direction: row;
	justify-content: space-between;
`;

const ViewCartWrapper = styled.View`
	paddingHorizontal: 30;
`;

const Modal = ({ RestaurantName, onCloseModal, cartItems, totalPrice }: IProps) => {
	return (
		<>
			<ModalMinorContainer 
				onPress={onCloseModal}
				activeOpacity={1}
			></ModalMinorContainer>
			<ModalMainContainer>
				<ScrollView>
					<TitleRestaurantWrapper>
						<Title
							fontFamily={FONTS.poppinsSemiBold}
							fontSize={FONTS_SIZE.medium18}
							marginBottom={10}
						>
							{RestaurantName}
						</Title>
					</TitleRestaurantWrapper>

					{cartItems.map(cartItem => (
						<>
							<CartItem>
								<Title>{cartItem.title}</Title>
								<Title>{cartItem.price}</Title>
							</CartItem>
							<Line 
								width={100} 
								height={1} 
								backgroundColor={COLORS.mediumGray} 
							/>
						</>
					))}

					<SubtotalContainer>
						<Title 
							fontFamily={FONTS.poppinsSemiBold}
						>
							Subtotal
						</Title>
						<Title 
							fontFamily={FONTS.poppinsSemiBold}
						>
							{`$${totalPrice}`}
						</Title>
					</SubtotalContainer>

					<ViewCartWrapper>
						<ViewCart 
							title="Checkout" 
							totalPrice={totalPrice} 
							onCallback={() => {}} 
						/>
					</ViewCartWrapper>
				</ScrollView>
			</ModalMainContainer>
		</>
	)
}

export default Modal;