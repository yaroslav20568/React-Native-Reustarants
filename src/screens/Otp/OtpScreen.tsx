import React, { useCallback, useState } from 'react';
import { ScreenContainer } from '../styles';
import { OtpStart, OtpVerification } from '../../components/importComponents';
import { useGetCountriesQuery } from '../../redux/RTKQuery/countriesApi';

const OtpScreen = () => {
	const { data } = useGetCountriesQuery(null);

	const [activeComponent, setActiveComponent] = useState<string>('Start');
	const [fullPhoneNumber, setFullPhoneNumber] = useState<string>('');

	const onConfirmNumber = useCallback((fullPhoneNumber: string): void => {
		setActiveComponent('Verification');
		setFullPhoneNumber(fullPhoneNumber);
	}, []);

	return (
		<ScreenContainer
			contentContainerStyle={{flexGrow: 1}}
		>
			{activeComponent === 'Start' ? 
				<OtpStart 
					countries={data}
					onConfirmNumber={onConfirmNumber}
				/> : 
				activeComponent === 'Verification' ? 
				<OtpVerification 
					fullPhoneNumber={fullPhoneNumber}
				/> : 
				''}
		</ScreenContainer>
	)
}

export default OtpScreen;
