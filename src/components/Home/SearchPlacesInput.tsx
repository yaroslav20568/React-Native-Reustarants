import React, { useRef } from 'react';
import 'react-native-get-random-values';
import { GooglePlaceData, GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS, GOOGLE_API_KEY } from '../../constants';
import { WrapperLocationIcon, WrapperClear, WrapperClearIcon, WrapperTimerIcon } from './styles';
import { Title } from '../importComponents';

interface PropsSearchPlacesInput {
  setCity: (cityName: string) => void;
}

const SearchPlacesInput = ({ setCity }: PropsSearchPlacesInput) => {
	const ref = useRef<GooglePlacesAutocompleteRef | undefined>();

	const animatedValue = useSharedValue<number>(30);

	const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: animatedValue.value}]
	}));

	const onSetCity = (data: GooglePlaceData): void => {
		setCity(data.description.split(',')[0].replace(' ', ''));
		animatedValue.value = withTiming(0, {duration: 700});
	};

	const onClearCity = (): void => {
		setCity('');
		ref.current?.setAddressText('');
		animatedValue.value = withTiming(30, {duration: 700});
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
				<WrapperClearIcon 
					onPress={onClearCity}
					activeOpacity={.7}
					style={animatedStyles}
				>
					<MaterialIcons name='clear' size={15} color={COLORS.white} />
				</WrapperClearIcon>
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
				}
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
