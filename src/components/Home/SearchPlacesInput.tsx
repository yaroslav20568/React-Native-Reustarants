import React, { useRef } from 'react';
import 'react-native-get-random-values';
import { GooglePlaceData, GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS, GOOGLE_API_KEY } from '../../constants';
import { LocationIconWrapper, ClearWrapper, ClearIconWrapper, TimerIconWrapper, TimerIconText } from './styles';

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
			<LocationIconWrapper>
				<MaterialIcons 
					name='location-pin' 
					size={25} 
					color={COLORS.black} 
				/>
			</LocationIconWrapper>
		);
	};

	const renderClearIcon = (): JSX.Element => {
		return (
			<ClearWrapper>
				<ClearIconWrapper 
					onPress={onClearCity}
					activeOpacity={.7}
					style={animatedStyles}
				>
					<MaterialIcons 
						name='clear' 
						size={15} 
						color={COLORS.white} 
					/>
				</ClearIconWrapper>
				<TimerIconWrapper>
					<MaterialIcons 
						name='timer' 
						size={20} 
						color={COLORS.black} 
					/>
					<TimerIconText>Search</TimerIconText>
				</TimerIconWrapper>
			</ClearWrapper>
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
					paddingRight: 110
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
