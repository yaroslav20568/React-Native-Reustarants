import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, Modal, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Lottie from 'lottie-react-native';
import { COLORS } from '../../../constants';
import { CountriesModalHeader, CountriesModalHeaderText, CountriesModalInner, CountryButton, CountryName, CurrentCountryCode, CurrentCountryCodeButton, CurrentCountryCodeWrapper, CurrentCountryFlag, OtpButton, OtpButtonText, OtpContainer, OtpText, OtpTitle, PhoneInput, PhoneInputWrapper } from './styles';
import { ICountry } from '../../../types';

interface PropsOtpStart {
  countries: Array<ICountry> | undefined;
	signInWithPhoneNumber: (fullNumber: string) => Promise<void>;
	phoneNumberConfirm: FirebaseAuthTypes.ConfirmationResult | null;
	setActiveComponent: (activeComponent: string) => void;
	isLoading: boolean;
}

const OtpStart = ({ countries, signInWithPhoneNumber, phoneNumberConfirm, setActiveComponent, isLoading }: PropsOtpStart) => {
	const [selectedCountry, setSelectedCountry] = useState<ICountry | undefined>(undefined);
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		setSelectedCountry(countries?.length ? countries[0] : undefined);
	}, [countries]);

	useEffect(() => {
		if(phoneNumberConfirm) {
			setActiveComponent('Verification');
		}
	}, [phoneNumberConfirm]);

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
			<OtpTitle 
				entering={FadeInUp.duration(1000)}
			>
				Use your account to get started
			</OtpTitle>
			<Animated.View
				entering={FadeInUp.delay(300).duration(1000)}
			>
				<FontAwesome 
					name='mobile-phone' 
					size={170} 
					color={COLORS.lightBlue} 
				/>
			</Animated.View>
			<OtpText
				entering={FadeInUp.delay(600).duration(1000)}
			>
				Enter you mobile number
			</OtpText>
			<PhoneInputWrapper
				entering={FadeInDown.delay(900).duration(1000)}
			>
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
					value={phoneNumber}
					onChangeText={setPhoneNumber}
					borderColor={phoneNumber.length > 0 && phoneNumber.length < 8 ? COLORS.red : COLORS.black}
					keyboardType='numeric'
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
			<OtpText
				entering={FadeInDown.delay(1200).duration(1000)}
			>
				You'll receive on 6 digit code on this number
			</OtpText>
			<OtpButton
				activeOpacity={.7}
				disabled={phoneNumber.length < 8 || isLoading ? true : false}
				entering={FadeInDown.delay(1500).duration(1000)}
				onPress={() => signInWithPhoneNumber('+' + selectedCountry?.callingCodes[0] + phoneNumber)}
			>
				{isLoading ? 
					<Lottie 
						source={require('../../../assets/animations/scanner.json')} 
						style={{width: 29.5, height: 29.5}} 
						autoPlay={true}
						duration={3000}
					/> : 
					<OtpButtonText>Next</OtpButtonText>}
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
