import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import { ScreenContainer } from '../styles';
import { OtpProfile, OtpStart, OtpVerification } from '../../components/importComponents';
import { useGetCountriesQuery } from '../../redux/RTKQuery/countriesApi';
import { RootStackParamList } from '../../navigation/Stacks';

interface PropsOtp extends NativeStackScreenProps<RootStackParamList, 'Otp'> {}

auth().settings.appVerificationDisabledForTesting = true;

const OtpScreen = ({ navigation }: PropsOtp) => {
	const { data } = useGetCountriesQuery(null);

	const [activeComponent, setActiveComponent] = useState<string>('Start');
	const [fullPhoneNumber, setFullPhoneNumber] = useState<string>('');
	const [phoneNumberConfirm, setPhoneNumberConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const navigateToTabs = useCallback((): void => {
		navigation.navigate('Tabs');
	}, []);

	const signInWithPhoneNumber = useCallback(async (fullPhoneNumber: string): Promise<void> => {
		setIsLoading(true);
		try {
			const confirmation = await auth().signInWithPhoneNumber(fullPhoneNumber);
			
			setIsLoading(false);
			setFullPhoneNumber(fullPhoneNumber);
			setTimeout(() => setPhoneNumberConfirm(confirmation), 100);
		} catch(e) {
			setIsLoading(false);
			Alert.alert('Try again');
		}
	}, [fullPhoneNumber]);

	const confirmOtpCode = useCallback(async (otpCode: string, fullPhoneNumber: string): Promise<void> => {
    setIsLoading(true);
		try {
      await phoneNumberConfirm?.confirm(otpCode);
			const user = (await firestore().collection('users').where('phone', '==', fullPhoneNumber).get())
				.docs.map(doc => doc.data())[0];
				
			setIsLoading(false);
			setTimeout(() => {
				if(!user) {
					setActiveComponent('Profile');
				} else {
					navigateToTabs();
				}
			}, 100);
    } catch (e) {
			setIsLoading(false);
      Alert.alert('Invalid code');
    }
  }, [fullPhoneNumber]);

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
						navigateToTabs={navigateToTabs}
					/> : 
					''}
		</ScreenContainer>
	)
}

export default OtpScreen;
