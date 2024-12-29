import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OtpButton, OtpButtonText, OtpContainer, OtpFormikErrorText, OtpFormikInput, OtpFormikInputWrapper, OtpTitle, OtpUserIconWrapper } from './styles';
import { COLORS } from '../../constants';

interface PropsOtpProfile {
	fullPhoneNumber: string;
	navigateToTabs: () => void;
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

const OtpProfile = ({ fullPhoneNumber, navigateToTabs }: PropsOtpProfile) => {
	const formValues = {firstName: '', lastName: '', email: '', phone: fullPhoneNumber};
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<OtpContainer>
			<OtpTitle 
				entering={FadeInUp.duration(1000)}
			>
				Please complete your profile
			</OtpTitle>
			<OtpUserIconWrapper
				entering={FadeInUp.delay(300).duration(1000)}
			>
				<FontAwesome 
					name='user' 
					size={170} 
					color={COLORS.lightBlue} 
				/>
			</OtpUserIconWrapper>
			<Formik
				initialValues={formValues}
				onSubmit={(values, {resetForm}) => {
					setIsLoading(true);

					firestore().collection('users').add(values)
						.then(async () => {
							setIsLoading(false);
							resetForm();
							await AsyncStorage.setItem('user-data', JSON.stringify(values));
							navigateToTabs();
						});
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
							disabled={isLoading}
							entering={FadeInDown.delay(1500).duration(1000)}
							onPress={handleSubmit as (e?: GestureResponderEvent) => void}
						>
							{isLoading ? 
								<Lottie 
									source={require('../../assets/animations/scanner.json')} 
									style={{width: 29.5, height: 29.5}} 
									autoPlay={true}
									duration={3000}
								/> : 
								<OtpButtonText>Submit</OtpButtonText>}
						</OtpButton>
					</>
				)}
			</Formik>
		</OtpContainer>
	)
}

export default OtpProfile;
