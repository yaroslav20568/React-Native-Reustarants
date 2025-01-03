import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { RestaurantInfoParamsLoader, RestaurantIsOpenNowWrapperLoaderStyle, RestaurantLineLoader, RestaurantNameLoader, RestaurantOpeningHoursDayLoader, RestaurantOpeningHoursItemLoaderStyle, RestaurantOpeningHoursListLoader, RestaurantOpeningHoursLoader, RestaurantOpeningHoursTimeLoader, RestaurantPhoneButtonLoaderStyle, RestaurantPhotoLoader, RestaurantTextsLoader } from './styles';

const RestaurantLoader = () => {
	const restaurantPhotoLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantNameLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantInfoParamsLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantLineLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantIsOpenNowWrapperLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantPhoneButtonLoaderOpacity = useSharedValue<number>(0.4);

	const restaurantPhotoLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantPhotoLoaderOpacity.value
	}));
	
	const restaurantNameLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantNameLoaderOpacity.value
	}));

	const restaurantLineLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantLineLoaderOpacity.value
	}));

	const restaurantInfoParamsLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantInfoParamsLoaderOpacity.value
	}));

	const restaurantIsOpenNowWrapperLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantIsOpenNowWrapperLoaderOpacity.value
	}));

	const restaurantPhoneButtonLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantPhoneButtonLoaderOpacity.value
	}));

	useEffect(() => {
		restaurantPhotoLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantNameLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantInfoParamsLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantLineLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantIsOpenNowWrapperLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantPhoneButtonLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<View>
			<RestaurantPhotoLoader 
				style={restaurantPhotoLoaderStyles}
			/>
			<RestaurantTextsLoader>
				<RestaurantNameLoader 
					style={restaurantNameLoaderStyles}
				/>
				<RestaurantInfoParamsLoader 
					style={restaurantInfoParamsLoaderStyles}
				/>
			</RestaurantTextsLoader>
			<RestaurantLineLoader 
				style={restaurantLineLoaderStyles}
			/>
			<RestaurantOpeningHoursLoader>
				<RestaurantOpeningHoursListLoader>
					{[...Array(7)].map((_, index) => 
						<RestaurantOpeningHoursItemLoader 
							index={index}
							key={`RestaurantOpeningHoursItem_${index}`}
						/>
					)}
				</RestaurantOpeningHoursListLoader>
				<View>
					<RestaurantPhoneButtonLoaderStyle
						style={restaurantPhoneButtonLoaderStyles}
					></RestaurantPhoneButtonLoaderStyle>
					<RestaurantIsOpenNowWrapperLoaderStyle
						style={restaurantIsOpenNowWrapperLoaderStyles}
					></RestaurantIsOpenNowWrapperLoaderStyle>
				</View>
			</RestaurantOpeningHoursLoader>
			<RestaurantLineLoader 
				style={restaurantLineLoaderStyles}
			/>
		</View>
	)
}

interface PropsRestaurantOpeningHoursItemLoader {
	index: number;
}

const RestaurantOpeningHoursItemLoader = ({ index }: PropsRestaurantOpeningHoursItemLoader) => {
	const restaurantOpeningHoursDayLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantOpeningHoursTimeLoaderOpacity = useSharedValue<number>(0.4);

	const restaurantOpeningHoursDayLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantOpeningHoursDayLoaderOpacity.value
	}));

	const restaurantOpeningHoursTimeLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantOpeningHoursTimeLoaderOpacity.value
	}));

	useEffect(() => {
		restaurantOpeningHoursDayLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantOpeningHoursTimeLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<RestaurantOpeningHoursItemLoaderStyle
			marginBottom={index !== 6 ? 14 : 0}
		>
			<RestaurantOpeningHoursDayLoader
				style={restaurantOpeningHoursDayLoaderStyles}
			></RestaurantOpeningHoursDayLoader>
			<RestaurantOpeningHoursTimeLoader
				style={restaurantOpeningHoursTimeLoaderStyles}
			></RestaurantOpeningHoursTimeLoader>
		</RestaurantOpeningHoursItemLoaderStyle>
	)
}

export default RestaurantLoader;
