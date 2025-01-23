import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { Loader } from './styles';

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

	const loaderStyles = useAnimatedStyle(() => ({
		opacity: opacity.value
	}));

	useEffect(() => {
		opacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<Loader 
			marginBottom={index !== 9 ? 20 : 0}
			style={loaderStyles} 
		/>
	);
};

export default RestaurantsLoader;
