import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, ButtonText, Container, Title } from '../OtpStart/styles';
import { UserIconWrapper, FormikInputWrapper, FormikInput, FormikErrorText } from './styles';
import { COLORS } from '../../../constants';
import { IUser } from '../../../types';

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
		<Container>
			<Title 
				entering={FadeInUp.duration(1000)}
			>
				Please complete your profile
			</Title>
			<UserIconWrapper
				entering={FadeInUp.delay(300).duration(1000)}
			>
				<FontAwesome 
					name='user' 
					size={170} 
					color={COLORS.lightBlue} 
				/>
			</UserIconWrapper>
			<Formik
				initialValues={formValues}
				onSubmit={(values, {resetForm}) => {
					setIsLoading(true);

					firestore().collection<IUser>('users').add(values)
						.then(async () => {
							setIsLoading(false);
							resetForm();
							await AsyncStorage.setItem('user-data', JSON.stringify(values));
							navigateToTabs();
						})
				}}
				validationSchema={yupSchema}
			>
				{({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
					<>
						<FormikInputWrapper
							entering={FadeInDown.delay(600).duration(1000)}
						>
							<FormikInput 
								placeholder='First name'
								placeholderTextColor={COLORS.darkGray}
								value={values.firstName}
								onChangeText={handleChange('firstName')}
								onBlur={handleBlur('firstName')}
							/>
							{errors.firstName && touched.firstName ? 
								<FormikErrorText>{errors.firstName}</FormikErrorText> : 
								null}
						</FormikInputWrapper>
						<FormikInputWrapper
							entering={FadeInDown.delay(900).duration(1000)}
						>
							<FormikInput 
								placeholder='Last name'
								placeholderTextColor={COLORS.darkGray}
								value={values.lastName}
								onChangeText={handleChange('lastName')}
								onBlur={handleBlur('lastName')}
							/>
							{errors.lastName && touched.lastName ? 
								<FormikErrorText>{errors.lastName}</FormikErrorText> : 
								null}
						</FormikInputWrapper>
						<FormikInputWrapper
							entering={FadeInDown.delay(1200).duration(1000)}
						>
							<FormikInput 
								placeholder='Email'
								placeholderTextColor={COLORS.darkGray}
								value={values.email}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
							/>
							{errors.email && touched.email ? 
								<FormikErrorText>{errors.email}</FormikErrorText> : 
								null}
						</FormikInputWrapper>
						<Button
							activeOpacity={.7}
							disabled={isLoading}
							entering={FadeInDown.delay(1500).duration(1000)}
							onPress={handleSubmit as (e?: GestureResponderEvent) => void}
						>
							{isLoading ? 
								<Lottie 
									source={require('../../../assets/animations/scanner.json')} 
									style={{width: 29.5, height: 29.5}} 
									autoPlay={true}
									duration={3000}
								/> : 
								<ButtonText>Submit</ButtonText>}
						</Button>
					</>
				)}
			</Formik>
		</Container>
	)
}

export default OtpProfile;
