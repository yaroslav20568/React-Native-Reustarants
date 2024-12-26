import React, { useEffect, useRef } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { OtpInput } from 'react-native-otp-entry';
import { useOtpVerify } from 'react-native-otp-verify';
import Lottie from 'lottie-react-native';
import { OtpButton, OtpButtonText, OtpContainer, OtpResendButton, OtpResendButtonText, OtpText, OtpTitle } from './styles';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';

interface PropsOtpVerification {
  fullPhoneNumber: string;
	signInWithPhoneNumber: (fullNumber: string) => Promise<void>;
	confirmOtpCode: (otpCode: string) => Promise<void>;
	isLoading: boolean;
}

const OtpVerification = ({ fullPhoneNumber, signInWithPhoneNumber, confirmOtpCode, isLoading }: PropsOtpVerification) => {
	const { otp, stopListener, startListener } = useOtpVerify({numberOfDigits: 6});
	const otpInputRef = useRef();

	useEffect(() => {
		startListener();

		return () => stopListener();
	}, []);

	useEffect(() => {
		otp && otpInputRef.current?.setValue(otp);
	}, [otp]);

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
				Please enter 6-digit code send to you
			</OtpText>
			<Animated.View
				entering={FadeInDown.delay(900).duration(1000)}
			>
				<OtpInput
					ref={otpInputRef}
					numberOfDigits={6}
					focusColor={COLORS.black}
					autoFocus={false}
					hideStick={true}
					blurOnFilled={true}
					type='numeric'
					focusStickBlinkingDuration={500}
					textInputProps={{accessibilityLabel: 'One-Time Password'}}
					theme={{
						containerStyle: {
							width: 300,
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
				onPress={() => signInWithPhoneNumber(fullPhoneNumber)}
			>
				<OtpResendButtonText>Resend OTP</OtpResendButtonText>
			</OtpResendButton>
			<OtpButton
				activeOpacity={.7}
				// disabled={!!otp}
				entering={FadeInDown.delay(1500).duration(1000)}
				onPress={() => otp && confirmOtpCode(otp)}
			>
				{isLoading ? 
					<Lottie 
						source={require('../../assets/animations/scanner.json')} 
						style={{width: 29.5, height: 29.5}} 
						autoPlay={true}
						duration={3000}
					/> : 
				<OtpButtonText>Verify now</OtpButtonText>}
			</OtpButton>
		</OtpContainer>
	)
}

export default OtpVerification;
