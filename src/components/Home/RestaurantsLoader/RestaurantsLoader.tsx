import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { RestaurantLoaderStyle } from './styles';

const RestaurantsLoader = () => {
  return (
    <View>
      {[...Array(10)].map((_, index) => 
				<RestaurantLoader 
					index={index}
					key={`restaurantLoader_${index}`}
				/>
			)}
    </View>
  );
};

interface PropsRestaurantLoader {
	index: number;
}

const RestaurantLoader = ({ index }: PropsRestaurantLoader) => {
	const opacity = useSharedValue<number>(0.4);

	const restaurantLoaderStyles = useAnimatedStyle(() => ({
		opacity: opacity.value
	}));

	useEffect(() => {
		opacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<RestaurantLoaderStyle 
			marginBottom={index !== 9 ? 20 : 0}
			style={restaurantLoaderStyles} 
		/>
	);
};

export default RestaurantsLoader;
