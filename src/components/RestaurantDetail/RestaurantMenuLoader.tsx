import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { RestaurantMenuItemCheckboxLoader, RestaurantMenuItemCheckboxWrapperLoader, RestaurantMenuItemImageLoader, RestaurantMenuItemImageWrapperLoader, RestaurantMenuItemLineLoader, RestaurantMenuItemLoaderStyle, RestaurantMenuItemNameLoader, RestaurantMenuItemPriceLoader, RestaurantMenuItemsWrapperLoader, RestaurantMenuItemTextsWrapperLoader } from './styles';

const RestaurantMenuLoader = () => {
	return (
		<RestaurantMenuItemsWrapperLoader>
			{[...Array(10)].map((_, index) => 
				<RestaurantMenuItemLoader 
					key={`RestaurantMenuItem_${index}`}
				/>
			)}
		</RestaurantMenuItemsWrapperLoader>
	)
}

const RestaurantMenuItemLoader = () => {
	const restaurantMenuItemCheckboxLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantMenuItemNameLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantMenuItemPriceLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantMenuItemImageLoaderOpacity = useSharedValue<number>(0.4);
	const restaurantMenuItemLineLoaderOpacity = useSharedValue<number>(0.4);

	const restaurantMenuItemCheckboxLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantMenuItemCheckboxLoaderOpacity.value
	}));

	const restaurantMenuItemNameLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantMenuItemNameLoaderOpacity.value
	}));

	const restaurantMenuItemPriceLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantMenuItemPriceLoaderOpacity.value
	}));

	const restaurantMenuItemImageLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantMenuItemImageLoaderOpacity.value
	}));

	const restaurantMenuItemLineLoaderStyles = useAnimatedStyle(() => ({
		opacity: restaurantMenuItemLineLoaderOpacity.value
	}));

	useEffect(() => {
		restaurantMenuItemCheckboxLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantMenuItemNameLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantMenuItemPriceLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantMenuItemImageLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		restaurantMenuItemLineLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<View>
			<RestaurantMenuItemLoaderStyle>
				<RestaurantMenuItemCheckboxWrapperLoader>
					<RestaurantMenuItemCheckboxLoader 
						style={restaurantMenuItemCheckboxLoaderStyles}
					/>
				</RestaurantMenuItemCheckboxWrapperLoader>
				<RestaurantMenuItemTextsWrapperLoader>
					<RestaurantMenuItemNameLoader 
						style={restaurantMenuItemNameLoaderStyles}
					/>
					<RestaurantMenuItemPriceLoader 
						style={restaurantMenuItemPriceLoaderStyles}
					/>
				</RestaurantMenuItemTextsWrapperLoader>
				<RestaurantMenuItemImageWrapperLoader>
					<RestaurantMenuItemImageLoader 
						style={restaurantMenuItemImageLoaderStyles}
					/>
				</RestaurantMenuItemImageWrapperLoader>
			</RestaurantMenuItemLoaderStyle>
			<RestaurantMenuItemLineLoader 
				style={restaurantMenuItemLineLoaderStyles}
			/>
		</View>
	)
}

export default RestaurantMenuLoader;
