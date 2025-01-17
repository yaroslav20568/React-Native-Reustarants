import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IRestaurant } from './../../../types';
import { RestaurantImage, RestaurantInfo, RestaurantName, RestaurantPrice, RestaurantRating, WrapperRestaurantRating } from './styles';
import { RootStackParamList } from '../../../navigation/Stacks';

interface PropsRestaurant extends IRestaurant {}

const RestaurantItem = ({ id, image_url, name, rating, price, url }: PropsRestaurant) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const onNavigate = (): void => {
		navigation.navigate('RestaurantDetail', {id, url});
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
