import React, { useCallback, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ScreenContainer } from '../styles';
import { OtpProfile, OtpStart, OtpVerification } from '../../components/importComponents';
import { useGetCountriesQuery } from '../../redux/RTKQuery/countriesApi';
import { Alert } from 'react-native';

auth().settings.appVerificationDisabledForTesting = true;

const OtpScreen = () => {
	const { data } = useGetCountriesQuery(null);

	const [activeComponent, setActiveComponent] = useState<string>('Profile');
	const [fullPhoneNumber, setFullPhoneNumber] = useState<string>('');
	const [phoneNumberConfirm, setPhoneNumberConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const signInWithPhoneNumber = useCallback(async (fullPhoneNumber: string): Promise<void> => {
		setIsLoading(true);
		try {
			const confirmation = await auth().signInWithPhoneNumber(fullPhoneNumber);
			setFullPhoneNumber(fullPhoneNumber);
			setTimeout(() => setPhoneNumberConfirm(confirmation), 100);
			setIsLoading(false);
		} catch(e) {
			Alert.alert('Try again');
			setIsLoading(false);
		}
	}, []);

	const confirmOtpCode = useCallback(async (otpCode: string): Promise<void> => {
    setIsLoading(true);
		try {
      await phoneNumberConfirm?.confirm(otpCode);
			setTimeout(() => setActiveComponent('Profile'), 100);
			setIsLoading(false);
    } catch (e) {
      Alert.alert('Invalid code');
			setIsLoading(false);
    }
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
				activeComponent === 'Profile' ? 
					<OtpProfile 
						fullPhoneNumber={fullPhoneNumber}
					/> : 
					''}
		</ScreenContainer>
	)
}

export default OtpScreen;
