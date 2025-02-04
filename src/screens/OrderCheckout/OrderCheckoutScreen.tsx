import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Lottie from 'lottie-react-native';
import { useStripe } from '@stripe/stripe-react-native';
import firestore from '@react-native-firebase/firestore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContainer } from '../styles';
import Title from '../../components/UI/Title';
import { FONTS, FONTS_SIZE } from '../../constants';
import { CartModalButton, OrderList } from '../../components/importComponents';
import { SERVER_URL } from '@env';
import { IOrder } from '../../types';
import { RootStackParamList } from '../../navigation/Stacks';
import { CartModalButtonWrapper } from '../../components/RestaurantDetail/CartModalButton/styles';

interface PropsOrderCheckoutScreen extends NativeStackScreenProps<RootStackParamList, 'OrderCheckout'> {}

const OrderCheckoutScreen = ({ route }: PropsOrderCheckoutScreen) => {
	const { restaurantName, totalPrice, cartItems, orderId } = route.params;

	const { initPaymentSheet, presentPaymentSheet } = useStripe();
	const [loading, setLoading] = useState<boolean>(false);
	const [isPaid, setIsPaid] = useState<boolean>(false);

	const fetchPaymentSheetParams = async () => {
		const response = await fetch(`${SERVER_URL}/payment-sheet`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({amount: totalPrice})
		});
		const { paymentIntent, ephemeralKey, customer } = await response.json();

		return {
			paymentIntent,
			ephemeralKey,
			customer,
		};
	};

	const initializePaymentSheet = async () => {
		const {
			paymentIntent,
			ephemeralKey,
			customer
		} = await fetchPaymentSheetParams();

		const { error } = await initPaymentSheet({
			merchantDisplayName: 'Example, Inc.',
			customerId: customer,
			customerEphemeralKeySecret: ephemeralKey,
			paymentIntentClientSecret: paymentIntent,
			allowsDelayedPaymentMethods: true,
			defaultBillingDetails: {
				name: 'Jane Doe'
			}
		});

		if (!error) {
			setLoading(true);
		}
	};

	const openPaymentSheet = async () => {
		const { error } = await presentPaymentSheet();

		if (error) {
			Alert.alert(`Error code: ${error.code}`, error.message);
		} else {
			setIsPaid(true);

			const order = (await firestore().collection<IOrder>('orders').doc(orderId).get()).data() as IOrder;

			firestore().collection<IOrder>('orders').doc(orderId).update({
				...order,
				status: {...order.status, isPaid: true}
			})
		}
	};

	useEffect(() => {
		if(!isPaid) {
			initializePaymentSheet();
		}
	}, []);

	return (
		<>
			<ScreenContainer>
				{isPaid && 
					<>
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
							{`Your order at ${restaurantName} has been placed for $${totalPrice} 🚀`}
						</Title>
					</>}
				<OrderList 
					cartItems={cartItems} 
				/>
				{isPaid && 
					<Lottie 
						source={require('../../assets/animations/cooking.json')} 
						style={{width: '100%', alignSelf: 'center', paddingBottom: 10}}
						autoPlay={true}
					/>}
			</ScreenContainer>
			{loading && !isPaid && 
				<CartModalButtonWrapper>
					<CartModalButton 
						title='Checkout' 
						totalPrice={totalPrice} 
						onCallback={openPaymentSheet} 
					/>
				</CartModalButtonWrapper>}
		</>
	)
}

export default OrderCheckoutScreen;