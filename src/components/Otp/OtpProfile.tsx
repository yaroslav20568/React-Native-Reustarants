import React from 'react';
import { GestureResponderEvent } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import { OtpButton, OtpButtonText, OtpContainer, OtpFormikErrorText, OtpFormikInput, OtpFormikInputWrapper, OtpTitle } from './styles';
import { COLORS } from '../../constants';

interface PropsOtpProfile {
	fullPhoneNumber: string;
}

const yupSchema = Yup.object({
	firstName: Yup.string()
		.min(2, 'Must be 2 characters or long')
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Must be 2 characters or long')
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Required')
});

const OtpProfile = ({ fullPhoneNumber }: PropsOtpProfile) => {
	const formValues = {firstName: '', lastName: '', email: '', phone: fullPhoneNumber};

	return (
		<OtpContainer>
			<OtpTitle 
				entering={FadeInUp.duration(1000)}
			>
				Please complete your profile
			</OtpTitle>
			<Animated.View
				entering={FadeInUp.delay(300).duration(1000)}
			>
				<FontAwesome 
					name='user' 
					size={170} 
					color={COLORS.lightBlue} 
				/>
			</Animated.View>
			<Formik
				initialValues={formValues}
				onSubmit={values => {
					console.log(values)
				}}
				validationSchema={yupSchema}
			>
				{({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
					<>
						<OtpFormikInputWrapper
							entering={FadeInDown.delay(600).duration(1000)}
						>
							<OtpFormikInput 
								placeholder='First name'
								placeholderTextColor={COLORS.darkGray}
								value={values.firstName}
								onChangeText={handleChange('firstName')}
								onBlur={handleBlur('firstName')}
								style={{width: '100%'}}
							/>
							{errors.firstName && touched.firstName ? 
								<OtpFormikErrorText>{errors.firstName}</OtpFormikErrorText> : 
								null}
						</OtpFormikInputWrapper>
						<OtpFormikInputWrapper
							entering={FadeInDown.delay(900).duration(1000)}
						>
							<OtpFormikInput 
								placeholder='Last name'
								placeholderTextColor={COLORS.darkGray}
								value={values.lastName}
								onChangeText={handleChange('lastName')}
								onBlur={handleBlur('lastName')}
							/>
							{errors.lastName && touched.lastName ? 
								<OtpFormikErrorText>{errors.lastName}</OtpFormikErrorText> : 
								null}
						</OtpFormikInputWrapper>
						<OtpFormikInputWrapper
							entering={FadeInDown.delay(1200).duration(1000)}
						>
							<OtpFormikInput 
								placeholder='Email'
								placeholderTextColor={COLORS.darkGray}
								value={values.email}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
							/>
							{errors.email && touched.email ? 
								<OtpFormikErrorText>{errors.email}</OtpFormikErrorText> : 
								null}
						</OtpFormikInputWrapper>
						<OtpButton
							activeOpacity={.7}
							// disabled={!otp}
							entering={FadeInDown.delay(1500).duration(1000)}
							onPress={handleSubmit as (e?: GestureResponderEvent) => void}
						>
							<OtpButtonText>Submit</OtpButtonText>
						</OtpButton>
					</>
				)}
			</Formik>
		</OtpContainer>
	)
}

export default OtpProfile;
