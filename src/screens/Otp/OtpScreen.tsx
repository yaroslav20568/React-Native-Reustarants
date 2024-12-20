import React from 'react';
import { ScreenContainer } from '../styles';
import { OtpStart } from '../../components/importComponents';
import { useGetCountriesQuery } from '../../redux/RTKQuery/countriesApi';

const OtpScreen = () => {
	const { data } = useGetCountriesQuery(null);

	return (
		<ScreenContainer
			contentContainerStyle={{flexGrow: 1}}
		>
			<OtpStart 
				countries={data}
			/>
		</ScreenContainer>
	)
}

export default OtpScreen;
