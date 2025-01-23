import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IRestaurant } from './../../../types';
import { Image, Info, Name, Price, Rating, RatingWrapper } from './styles';
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
			<Image 
				source={{uri: image_url}}
			/>
      <Info>
				<View>
					<Name>{name}</Name>
					{price && <Price>{price}</Price>}
				</View>
				<RatingWrapper>
					<Rating>{String(rating)}</Rating>
				</RatingWrapper>
			</Info>
    </TouchableOpacity>
  );
};

export default RestaurantItem;
