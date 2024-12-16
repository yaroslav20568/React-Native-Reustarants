import React, { useRef } from 'react';
import 'react-native-get-random-values';
import { GooglePlaceData, GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS, GOOGLE_API_KEY } from '../../constants';
import { WrapperLocationIcon, WrapperClear, WrapperClearIcon, WrapperTimerIcon } from './styles';
import { Title } from '../importComponents';

interface PropsSearchPlacesInput {
	cityName: string;
  setCity: (cityName: string) => void;
}

const SearchPlacesInput = ({ cityName, setCity }: PropsSearchPlacesInput) => {
	const ref = useRef<GooglePlacesAutocompleteRef | undefined>();

	const onSetCity = (data: GooglePlaceData): void => {
		setCity(data.description.split(',')[0].replace(' ', ''));
	};

	const onClearCity = (): void => {
		setCity('');
		ref.current?.setAddressText('');
	};

	const renderLocationIcon = (): JSX.Element => {
		return (
			<WrapperLocationIcon>
				<MaterialIcons name='location-pin' size={25} color={COLORS.black} />
			</WrapperLocationIcon>
		);
	};

	const renderClearIcon = (): JSX.Element => {
		return (
			<WrapperClear>
				{cityName ? 
					<WrapperClearIcon 
						onPress={onClearCity}
						activeOpacity={.7}
					>
						<MaterialIcons name='clear' size={15} color={COLORS.white} />
					</WrapperClearIcon> : 
					null}
				<WrapperTimerIcon>
					<MaterialIcons name='timer' size={20} color={COLORS.black} />
					<Title>Search</Title>
				</WrapperTimerIcon>
			</WrapperClear>
		);
	}

  return (
		<GooglePlacesAutocomplete
			ref={ref}
			placeholder='Enter your city'
			onPress={onSetCity}
			renderLeftButton={renderLocationIcon}
			renderRightButton={renderClearIcon}
			styles={{
				container: {
					marginVertical: 10
				},
				textInputContainer: {
					height: 55
				},
				textInput: {
					height: 50,
					backgroundColor: COLORS.lightGray,
					borderRadius: 30,
					paddingLeft: 40,
					paddingRight: 130
				},
				listView: {
					zIndex: 100
				},
				poweredContainer: {
					display: 'none'
				},
			}}
			query={{
				key: GOOGLE_API_KEY,
				language: 'en',
				types: '(cities)'
			}}
		/>
  );
};

export default SearchPlacesInput;
