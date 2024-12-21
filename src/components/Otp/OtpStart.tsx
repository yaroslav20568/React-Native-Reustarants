import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, Modal, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants';
import { CountriesModalHeader, CountriesModalHeaderText, CountriesModalInner, CountryButton, CountryName, CurrentCountryCode, CurrentCountryCodeButton, CurrentCountryCodeWrapper, CurrentCountryFlag, OtpButton, OtpButtonText, OtpContainer, OtpText, OtpTitle, PhoneInput, PhoneInputWrapper } from './styles';
import { ICountry } from '../../types';

interface PropsOtpStart {
  countries: Array<ICountry> | undefined;
}

const OtpStart = ({ countries }: PropsOtpStart) => {
	const [selectedCountry, setSelectedCountry] = useState<ICountry | undefined>(undefined);
	const [phone, setPhone] = useState<string>('');
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		setSelectedCountry(countries?.length ? countries[0] : undefined);
	}, [countries]);

	const openModal = (): void => {
		setVisible(true);
	};

	const closeModal = (): void => {
		setVisible(false);
	};

	const selectCountry = useCallback((country: ICountry) => {
		setSelectedCountry(country);
		setVisible(false)
	}, []);

	return (
		<OtpContainer>
			<OtpTitle>Use Your Account to Get Started</OtpTitle>
			<FontAwesome 
				name='mobile-phone' 
				size={170} 
				color={COLORS.lightBlue} 
			/>
			<OtpText>Enter You Mobile Number</OtpText>
			<PhoneInputWrapper>
				<CurrentCountryCodeButton
					activeOpacity={.7}
					onPress={openModal}
				>
					<CurrentCountryCodeWrapper>
						<CurrentCountryFlag 
							source={{uri: `https://flagcdn.com/w40/${selectedCountry?.alpha2Code.toLowerCase()}.png`}}
						/>
						<CurrentCountryCode>+{selectedCountry?.callingCodes[0]}</CurrentCountryCode>
					</CurrentCountryCodeWrapper>
				</CurrentCountryCodeButton>
				<PhoneInput 
					placeholder='Enter your number'
					placeholderTextColor={COLORS.black}
					value={phone}
					onChangeText={setPhone}
					borderColor={phone.length > 0 && phone.length < 8 ? COLORS.red : COLORS.black}
				/>
			</PhoneInputWrapper>
			<Modal 
				visible={visible}
			>
				<CountriesModalInner>
					<CountriesModalHeader>
						<CountriesModalHeaderText>{selectedCountry?.name}</CountriesModalHeaderText>
						<TouchableOpacity
							activeOpacity={.4}
							onPress={closeModal}
						>
							<MaterialIcons 
								name='clear' 
								size={30} 
								color={COLORS.black} 
							/>
						</TouchableOpacity>
					</CountriesModalHeader>
					<FlatList 
						data={countries}
						renderItem={({item}) => 
							<Country 
								country={item} 
								selectCountry={selectCountry} 
							/>
						}
						showsVerticalScrollIndicator={false}
						keyExtractor={(_, index) => `country_${index}`}
						initialNumToRender={20}
					/>
				</CountriesModalInner>
			</Modal>
			<OtpText>You'll receive on 4 digit code on this number</OtpText>
			<OtpButton
				activeOpacity={.7}
				disabled={phone.length >= 8 ? false : true}
			>
				<OtpButtonText>Next</OtpButtonText>
			</OtpButton>
		</OtpContainer>
	)
}

interface PropsCountryItem {
	country: ICountry;
	selectCountry: (country: ICountry) => void;
}

const Country = memo(({ country, selectCountry }: PropsCountryItem) => {
	const onSelectCountry = (): void => {
		selectCountry(country);
	};

	return (
		<CountryButton
			activeOpacity={.7}
			onPress={onSelectCountry}
		>
			<CurrentCountryFlag 
				source={{uri: `https://flagcdn.com/w40/${country.alpha2Code.toLowerCase()}.png`}}
			/>
			<CountryName>{country.name} (+{country.callingCodes[0]})</CountryName>
		</CountryButton>
	)
})

export default OtpStart;
