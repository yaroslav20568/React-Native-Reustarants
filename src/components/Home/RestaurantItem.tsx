import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IRestaurant } from './../../types';
import { RestaurantImage, RestaurantInfo, RestaurantName, RestaurantPrice, RestaurantRating, WrapperRestaurantRating } from './styles';

interface PropsRestaurant extends IRestaurant {
}

const RestaurantItem = ({ image_url, name, rating, price, categories, review_count }: PropsRestaurant) => {
  const navigation: any = useNavigation();

	const onNavigate = (): void => {
		navigation.navigate('RestaurantDetail', { image_url, name, rating, price, categories, review_count });
	};

  return (
    <TouchableOpacity 
			activeOpacity={.7} 
			onPress={onNavigate}
		>
			<RestaurantImage 
				source={{uri: image_url}}
			/>
      <RestaurantInfo>
				<View>
					<RestaurantName>{name}</RestaurantName>
					{price && <RestaurantPrice>{price}</RestaurantPrice>}
				</View>
				<WrapperRestaurantRating>
					<RestaurantRating>{String(rating)}</RestaurantRating>
				</WrapperRestaurantRating>
			</RestaurantInfo>
    </TouchableOpacity>
  );
};

export default RestaurantItem;
