import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants';
import { CountriesModalHeader, CountriesModalHeaderText, CountriesModalInner, CountryButton, CountryName, CurrentCountryCode, CurrentCountryCodeButton, CurrentCountryCodeWrapper, CurrentCountryFlag, OtpButton, OtpButtonText, OtpContainer, OtpText, OtpTitle, PhoneInput, PhoneInputWrapper } from './styles';
import { ICountry } from '../../types';
import { FlatList, Modal, TouchableOpacity } from 'react-native';

interface PropsOtpStart {
  countries: Array<ICountry> | undefined;
}

const OtpStart = ({ countries }: PropsOtpStart) => {
	const [country, setCountry] = useState<ICountry | undefined>(undefined);
	const [phone, setPhone] = useState<string>('');
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		setCountry(countries?.length ? countries[0] : undefined);
	}, [countries]);

	const openModal = (): void => {
		setVisible(true);
	};

	const closeModal = (): void => {
		setVisible(false);
	};

	const selectCountry = (country: ICountry) => {
		setCountry(country);
		setVisible(false)
	};

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
							source={{uri: `https://flagsapi.com/${country?.alpha2Code}/flat/32.png`}}
						/>
						<CurrentCountryCode>+{country?.callingCodes[0]}</CurrentCountryCode>
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
				animationType='slide'
				visible={visible}
			>
				<CountriesModalInner>
					<CountriesModalHeader>
						<CountriesModalHeaderText>{country?.name}</CountriesModalHeaderText>
						<TouchableOpacity
							activeOpacity={.7}
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
							<CountryButton
								activeOpacity={.7}
								onPress={() => selectCountry(item)}
							>
								<CurrentCountryFlag 
									source={{uri: `https://flagsapi.com/${item?.alpha2Code}/flat/32.png`}}
								/>
								<CountryName>{item?.name} (+{item?.callingCodes[0]})</CountryName>
							</CountryButton>
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

export default OtpStart;
