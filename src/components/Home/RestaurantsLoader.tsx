import React, { useEffect } from 'react';
import { View } from 'react-native';
import { RestaurantLoaderStyle } from './styles';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const RestaurantsLoader = () => {
  return (
    <View>
      {[...Array(10)].map((_, index) => 
				<RestaurantLoader 
					key={`restaurantLoader_${index}`}
				/>
			)}
    </View>
  );
};

const RestaurantLoader = () => {
	const opacity = useSharedValue<number>(0.4);

	const restaurantLoaderStyles = useAnimatedStyle(() => ({
		opacity: opacity.value
	}));

	useEffect(() => {
		opacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<RestaurantLoaderStyle 
			style={restaurantLoaderStyles} 
		/>
	);
};

export default RestaurantsLoader;
