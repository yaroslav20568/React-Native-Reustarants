import React, { useEffect, useRef } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { OtpInput, OtpInputRef } from 'react-native-otp-entry';
import { useOtpVerify } from 'react-native-otp-verify';
import Lottie from 'lottie-react-native';
import { Button, ButtonText, Container, Text, Title } from '../OtpStart/styles';
import { ResendButton, ResendButtonText } from './styles';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

interface PropsOtpVerification {
  fullPhoneNumber: string;
	signInWithPhoneNumber: (fullNumber: string) => Promise<void>;
	confirmOtpCode: (otpCode: string, fullNumber: string) => Promise<void>;
	isLoading: boolean;
}

const OtpVerification = ({ fullPhoneNumber, signInWithPhoneNumber, confirmOtpCode, isLoading }: PropsOtpVerification) => {
	const { otp, stopListener, startListener } = useOtpVerify({numberOfDigits: 6});
	const otpInputRef = useRef<OtpInputRef | null>(null);

	useEffect(() => {
		startListener();

		return () => stopListener();
	}, []);

	useEffect(() => {
		otp && otpInputRef.current?.setValue(otp);
	}, [otp]);

	return (
		<Container>
			<Title 
				entering={FadeInUp.duration(1000)}
			>
				Phone verification
			</Title>
			<Animated.View
				entering={FadeInUp.delay(300).duration(1000)}
			>
				<FontAwesome 
					name='mobile-phone' 
					size={170} 
					color={COLORS.lightBlue} 
				/>
			</Animated.View>
			<Text
				entering={FadeInUp.delay(600).duration(1000)}
			>
				Please enter 6-digit code send to you
			</Text>
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
					disabled={isLoading}
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
			<ResendButton
				activeOpacity={.7}
				disabled={!!otp}
				entering={FadeInDown.delay(1200).duration(1000)}
				onPress={() => signInWithPhoneNumber(fullPhoneNumber)}
			>
				<ResendButtonText>Resend OTP</ResendButtonText>
			</ResendButton>
			<Button
				activeOpacity={.7}
				disabled={!otp}
				entering={FadeInDown.delay(1500).duration(1000)}
				onPress={() => otp && confirmOtpCode(otp, fullPhoneNumber)}
			>
				{isLoading ? 
					<Lottie 
						source={require('../../../assets/animations/scanner.json')} 
						style={{width: 29.5, height: 29.5}} 
						autoPlay={true}
						duration={3000}
					/> : 
				<ButtonText>Verify now</ButtonText>}
			</Button>
		</Container>
	)
}

export default OtpVerification;
