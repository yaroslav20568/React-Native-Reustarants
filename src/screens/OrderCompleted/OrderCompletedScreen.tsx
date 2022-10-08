import React from 'react';
import { View, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import { ScreenContainer } from '../styles';
import Title from './../../components/UI/Title';
import { FONTS, FONTS_SIZE } from '../../constants';
import { useRoute } from '@react-navigation/native';
import { OrderList } from '../../components/importComponents';

const OrderCompletedScreen = () => {
	const route = useRoute<any>();
	console.log(route.params);

	return (
		<ScreenContainer>
			<Lottie 
				source={require('../../assets/animations/check-mark.json')} 
				style={{width: 100, alignSelf: 'center'}}
				autoPlay={true}
				loop={false}
			/>

			<Title 
				fontFamily={FONTS.poppinsSemiBold} 
				fontSize={FONTS_SIZE.medium18}
			>
				{`Your order at ${route.params.RestaurantName} has been placed for $${route.params.totalPrice} 🚀`}
			</Title>

			<OrderList cartItems={route.params.cartItems} />
			
			<Lottie 
				source={require('../../assets/animations/cooking.json')} 
				style={{width: '100%', alignSelf: 'center', paddingBottom: 10}}
				autoPlay={true}
			/>
		</ScreenContainer>
	)
}

export default OrderCompletedScreen;