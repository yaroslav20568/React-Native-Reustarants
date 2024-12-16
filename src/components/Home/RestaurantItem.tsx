import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title, Image } from '../importComponents';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';
import { IRestaurant } from './../../types';
import { RestaurantInfo, RestaurantItemContainer, RestaurantRating } from './styles';

interface PropsRestaurant extends IRestaurant {
}

const RestaurantItem = ({ image_url, name, rating, price, categories, review_count }: PropsRestaurant) => {
  const navigation: any = useNavigation();

	const onNavigate = (): void => {
		navigation.navigate('RestaurantDetail', { image_url, name, rating, price, categories, review_count });
	};

  return (
    <RestaurantItemContainer 
			activeOpacity={.7} 
			onPress={onNavigate}
		>
			<Image 
				img={image_url} 
				width={100}
				height={180} 
			/>
      <RestaurantInfo>
				<View>
					<Title 
						fontFamily={FONTS.poppinsSemiBold}
						fontSize={FONTS_SIZE.medium16}
					>
						{name}
					</Title>
					<Title
						color={COLORS.mediumGray}
					>
						{price}
					</Title>
				</View>
				<RestaurantRating>
					<Title>{String(rating)}</Title>
				</RestaurantRating>
			</RestaurantInfo>
    </RestaurantItemContainer>
  );
};

export default RestaurantItem;
