import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { InfoParamsLoader, IsOpenNowWrapperLoader, LineLoader, NameLoader, OpeningHoursDayLoader, OpeningHoursItemLoader, OpeningHoursListLoader, OpeningHoursLoader, OpeningHoursTimeLoader, PhoneButtonLoader, PhotoLoader, TextsLoader } from './styles';

const RestaurantLoader = () => {
	const photoLoaderOpacity = useSharedValue<number>(0.4);
	const nameLoaderOpacity = useSharedValue<number>(0.4);
	const infoParamsLoaderOpacity = useSharedValue<number>(0.4);
	const lineLoaderOpacity = useSharedValue<number>(0.4);
	const isOpenNowWrapperLoaderOpacity = useSharedValue<number>(0.4);
	const phoneButtonLoaderOpacity = useSharedValue<number>(0.4);

	const photoLoaderStyles = useAnimatedStyle(() => ({
		opacity: photoLoaderOpacity.value
	}));
	
	const nameLoaderStyles = useAnimatedStyle(() => ({
		opacity: nameLoaderOpacity.value
	}));

	const lineLoaderStyles = useAnimatedStyle(() => ({
		opacity: lineLoaderOpacity.value
	}));

	const infoParamsLoaderStyles = useAnimatedStyle(() => ({
		opacity: infoParamsLoaderOpacity.value
	}));

	const isOpenNowWrapperLoaderStyles = useAnimatedStyle(() => ({
		opacity: isOpenNowWrapperLoaderOpacity.value
	}));

	const phoneButtonLoaderStyles = useAnimatedStyle(() => ({
		opacity: phoneButtonLoaderOpacity.value
	}));

	useEffect(() => {
		photoLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		nameLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		infoParamsLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		lineLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		isOpenNowWrapperLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		phoneButtonLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<View>
			<PhotoLoader 
				style={photoLoaderStyles}
			/>
			<TextsLoader>
				<NameLoader 
					style={nameLoaderStyles}
				/>
				<InfoParamsLoader 
					style={infoParamsLoaderStyles}
				/>
			</TextsLoader>
			<LineLoader 
				style={lineLoaderStyles}
			/>
			<OpeningHoursLoader>
				<OpeningHoursListLoader>
					{[...Array(7)].map((_, index) => 
						<RestaurantOpeningHoursItemLoader 
							index={index}
							key={`RestaurantOpeningHoursItem_${index}`}
						/>
					)}
				</OpeningHoursListLoader>
				<View>
					<PhoneButtonLoader
						style={phoneButtonLoaderStyles}
					/>
					<IsOpenNowWrapperLoader
						style={isOpenNowWrapperLoaderStyles}
					/>
				</View>
			</OpeningHoursLoader>
			<LineLoader 
				style={lineLoaderStyles}
			/>
		</View>
	)
}

interface PropsRestaurantOpeningHoursItemLoader {
	index: number;
}

const RestaurantOpeningHoursItemLoader = ({ index }: PropsRestaurantOpeningHoursItemLoader) => {
	const openingHoursDayLoaderOpacity = useSharedValue<number>(0.4);
	const openingHoursTimeLoaderOpacity = useSharedValue<number>(0.4);

	const openingHoursDayLoaderStyles = useAnimatedStyle(() => ({
		opacity: openingHoursDayLoaderOpacity.value
	}));

	const openingHoursTimeLoaderStyles = useAnimatedStyle(() => ({
		opacity: openingHoursTimeLoaderOpacity.value
	}));

	useEffect(() => {
		openingHoursDayLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		openingHoursTimeLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<OpeningHoursItemLoader
			marginBottom={index !== 6 ? 14 : 0}
		>
			<OpeningHoursDayLoader
				style={openingHoursDayLoaderStyles}
			></OpeningHoursDayLoader>
			<OpeningHoursTimeLoader
				style={openingHoursTimeLoaderStyles}
			></OpeningHoursTimeLoader>
		</OpeningHoursItemLoader>
	)
}

export default RestaurantLoader;
