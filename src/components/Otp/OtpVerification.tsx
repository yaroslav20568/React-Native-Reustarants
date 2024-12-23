import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { OtpInput } from 'react-native-otp-entry';
import { OtpButton, OtpButtonText, OtpContainer, OtpResendButton, OtpResendButtonText, OtpText, OtpTitle } from './styles';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';

interface PropsOtpVerification {
  fullPhoneNumber: string;
}

const OtpVerification = ({ fullPhoneNumber }: PropsOtpVerification) => {
	return (
		<OtpContainer>
			<OtpTitle 
				entering={FadeInUp.duration(1000)}
			>
				Phone verification
			</OtpTitle>
			<Animated.View
				entering={FadeInUp.delay(300).duration(1000)}
			>
				<FontAwesome 
					name='mobile-phone' 
					size={170} 
					color={COLORS.lightBlue} 
				/>
			</Animated.View>
			<OtpText
				entering={FadeInUp.delay(600).duration(1000)}
			>
				Please enter 4-digit code send to you
			</OtpText>
			<Animated.View
				entering={FadeInDown.delay(900).duration(1000)}
			>
				<OtpInput
					numberOfDigits={4}
					focusColor={COLORS.black}
					autoFocus={false}
					hideStick={true}
					blurOnFilled={true}
					type='numeric'
					focusStickBlinkingDuration={500}
					textInputProps={{accessibilityLabel: 'One-Time Password'}}
					theme={{
						containerStyle: {
							width: 220,
							marginBottom: 20
						},
						pinCodeContainerStyle: {
							borderRadius: 0,
							width: 40,
							height: 37,
							borderWidth: 0,
							borderBottomWidth: 2,
							borderColor: COLORS.mediumGray
						},
						pinCodeTextStyle: {
							fontFamily: FONTS.poppinsRegular,
							fontSize: FONTS_SIZE.large24,
							color: COLORS.black
						}
					}}
				/>
			</Animated.View>
			<OtpResendButton
				activeOpacity={.7}
				entering={FadeInDown.delay(1200).duration(1000)}
			>
				<OtpResendButtonText>Resend OTP</OtpResendButtonText>
			</OtpResendButton>
			<OtpButton
				activeOpacity={.7}
				entering={FadeInDown.delay(1500).duration(1000)}
			>
				<OtpButtonText>Verify now</OtpButtonText>
			</OtpButton>
		</OtpContainer>
	)
}

export default OtpVerification;
