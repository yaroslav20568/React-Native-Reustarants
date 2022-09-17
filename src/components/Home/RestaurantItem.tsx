import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Title, Image } from '../importComponents';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';
import { IRestaurant } from './../../types';

interface PropsRestaurant extends IRestaurant {
}

const RestaurantItemContainer = styled.TouchableOpacity`
  marginBottom: 20;
`;

const RestaurantInfo = styled.View`
  backgroundColor: ${COLORS.white};
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  paddingVertical: 5;
  paddingHorizontal: 10;
  borderBottomLeftRadius: 10;
  borderBottomRightRadius: 10;
`;

const RestaurantRating = styled.View`
  backgroundColor: ${COLORS.lightGray};
//   paddingVertical: 7;
//   paddingHorizontal: 7;
  alignItems: center;
  justifyContent: center;
  width: 35;
  height: 35;
  borderRadius: 100;
`;

const RestaurantItem = ({ image_url, name, rating, price, categories, review_count }: PropsRestaurant) => {
  const navigation: any = useNavigation();

  return (
    <RestaurantItemContainer 
			activeOpacity={1} 
			onPress={() => navigation.navigate('RestaurantDetail', { image_url, name, rating, price, categories, review_count })}
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
