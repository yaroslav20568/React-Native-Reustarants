import React from 'react';
import { ScreenContainer } from '../styles';
import { PaymentForm } from '../../components/importComponents';

const PaymentScreen = () => {
	return (
		<ScreenContainer 
			contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
		>
			<PaymentForm />
		</ScreenContainer>
	)
}

export default PaymentScreen;
