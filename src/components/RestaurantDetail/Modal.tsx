import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { Title, Line, ViewCart, ModalList } from '../importComponents';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';
import { IFood } from './../../types';
import { useActions } from './../../redux/typedHooks';

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

const SubtotalContainer = styled.View`
	paddingVertical: 20;
	flex-direction: row;
	justify-content: space-between;
`;

const ViewCartWrapper = styled.View`
	paddingHorizontal: 30;
`;

const Modal = ({ RestaurantName, onCloseModal, cartItems, totalPrice }: IProps) => {
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
					RestaurantName,
					cartItems,
					totalPrice
				});
				clearCart();
			}, 400);
		}, 2000);
	};
	
	return (
		<>
			<ModalMinorContainer 
				onPress={onCloseModal}
				activeOpacity={1}
			></ModalMinorContainer>

			{autoplayBool && 
				<Lottie 
					source={require('../../assets/animations/scanner.json')} 
					style={{position: 'absolute', zIndex: 300}} 
					autoPlay={autoplayBool}
					duration={3000}
				/>
			}

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

					<ModalList cartItems={cartItems} />

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
							onCallback={checkoutComplete} 
						/>
					</ViewCartWrapper>
				</ScrollView>
			</ModalMainContainer>
		</>
	)
}

export default Modal;