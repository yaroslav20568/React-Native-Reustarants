import React, { useCallback, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ScreenContainer } from '../styles';
import { OtpStart, OtpVerification } from '../../components/importComponents';
import { useGetCountriesQuery } from '../../redux/RTKQuery/countriesApi';
import { Alert } from 'react-native';

auth().settings.appVerificationDisabledForTesting = true;

const OtpScreen = () => {
	const { data } = useGetCountriesQuery(null);

	const [activeComponent, setActiveComponent] = useState<string>('Start');
	const [fullPhoneNumber, setFullPhoneNumber] = useState<string>('');
	const [phoneNumberConfirm, setPhoneNumberConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const signInWithPhoneNumber = useCallback(async (fullPhoneNumber: string): Promise<void> => {
		// try {
		// 	const confirmation = await auth().signInWithPhoneNumber(fullPhoneNumber);
		// 	setFullPhoneNumber(fullPhoneNumber);
		// 	setPhoneNumberConfirm(confirmation);
		// } catch (e) {
		// 	console.log(e);
		// }
		setIsLoading(true);
		const signInWithPhoneNumber = new Promise((resolve, reject) => {
			setTimeout(() => {
				setIsLoading(false);
				resolve('confirm');
				// reject('Error');
			}, 1000);
		});

		signInWithPhoneNumber
			.then((data) => {
				setFullPhoneNumber(fullPhoneNumber);
				setTimeout(() => setPhoneNumberConfirm(data), 100);
			})
			.catch((e) => {
				Alert.alert(e)
			})
	}, []);

	const confirmOtpCode = useCallback(async (otpCode: string): Promise<void> => {
    // try {
    //   await phoneNumberConfirm?.confirm(otpCode);
    // } catch (e) {
    //   console.log(e);
    // }
		setIsLoading(true);
		const confirmOtpCode = new Promise((resolve, reject) => {
			setTimeout(() => {
				setIsLoading(false);
				resolve('12345');
				// reject('Error');
			}, 1000);
		});

		confirmOtpCode
			.then(() => {
				setTimeout(() => setActiveComponent('Start'), 100);
			})
			.catch(() => {
				Alert.alert('Invalid code')
			})
  }, []);

	return (
		<ScreenContainer
			contentContainerStyle={{flexGrow: 1}}
		>
			{activeComponent === 'Start' ? 
				<OtpStart 
					countries={data}
					signInWithPhoneNumber={signInWithPhoneNumber}
					phoneNumberConfirm={phoneNumberConfirm}
					setActiveComponent={setActiveComponent}
					isLoading={isLoading}
				/> : 
				activeComponent === 'Verification' ? 
				<OtpVerification 
					fullPhoneNumber={fullPhoneNumber}
					signInWithPhoneNumber={signInWithPhoneNumber}
					confirmOtpCode={confirmOtpCode}
					isLoading={isLoading}
				/> : 
				''}
		</ScreenContainer>
	)
}

export default OtpScreen;
