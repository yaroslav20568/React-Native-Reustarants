import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CreditCardView, CreditCardInput, CreditCardFormField, CreditCardFormData } from 'react-native-credit-card-input';
import { PriceWrapper, PriceTitle, PriceValue, Button, ButtonText } from './styles';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';

const PaymentForm = () => {
	const [focusedField, setFocusedField] = useState<CreditCardFormField>('number');
	const [formData, setFormData] = useState<CreditCardFormData | null>(null);

	return (
		<View>
			<PriceWrapper>
				<PriceTitle>Total price</PriceTitle>
				<PriceValue style={{fontSize: 24, marginLeft: 10}}>$20</PriceValue>
			</PriceWrapper>
			<View style={{alignItems: 'center'}}>
				<CreditCardView
					focusedField={focusedField}
					type={formData?.values.type}
					number={formData?.values.number}
					expiry={formData?.values.expiry}
					cvc={formData?.values.cvc}
				/>
				<CreditCardInput 
					onChange={setFormData}
					onFocusField={setFocusedField}
					style={{
						width: '100%',
						paddingHorizontal: 0
					}}
					inputStyle={{
						paddingVertical: 0,
						fontFamily: FONTS.poppinsRegular,
						fontSize: FONTS_SIZE.small14,
						paddingHorizontal: 5
					}}
					placeholderColor={COLORS.darkGray}
					labelStyle={{
						fontFamily: FONTS.poppinsSemiBold,
						fontSize: FONTS_SIZE.small14,
						lineHeight: 16,
						color: COLORS.black,
						paddingHorizontal: 5
					}}
				/>
			</View>
			<View>
        <Text>
          {formData?.valid
            ? '✅ Possibly valid card'
            : '❌ Invalid/Incomplete card'}
        </Text>
        <Text>
					{formData?.status.number === 'valid' ? '✅ ' : '❌ '}
          {'Number: '}{formData?.values.number}
        </Text>
        <Text>
					{formData?.status.expiry === 'valid' ? '✅ ' : '❌ '}
          {'Expiry: '}{formData?.values.expiry}
        </Text>
        <Text>
					{formData?.status.cvc === 'valid' ? '✅ ' : '❌ '}
          {'Cvc: '}{formData?.values.cvc}
        </Text>
        <Text>
          {'ℹ️ Type: '}{formData?.values.type}
        </Text>
      </View>
			<Button 
				activeOpacity={.7}
				onPress={() => console.log(formData?.valid)}
			>
				<ButtonText>Pay</ButtonText>
			</Button>
		</View>
	)
}

export default PaymentForm;
