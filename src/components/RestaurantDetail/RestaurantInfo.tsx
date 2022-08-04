import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { FONTS, FONTS_SIZE } from '../../constants';
import { Image, Title } from '../importComponents';

interface ICategory {
  title: string
}

interface PropsRestaurantInfo {
  image_url: string,
  name: string,
  rating: number,
  price: string,
  categories: Array<ICategory>,
  review_count: number
}

const InfoTexts = styled.View`
  paddingVertical: 10;
  paddingLeft: 15;
`;

const RestaurantInfo = ({ image_url, name, rating, price, categories, review_count }: PropsRestaurantInfo) => {
  const categoriesString = categories.reduce((str, currValue) => str + currValue.title + ' · ', '') + `${price} · 💳 · ${rating} ⭐ · (${review_count}+)`;
  
  return (
	<View>
	  <Image
        img={image_url}
		width={100}
		height={190}
	  />
	  <InfoTexts>
        <Title 
          fontSize={FONTS_SIZE.large24}
		  fontFamily={FONTS.poppinsSemiBold} 
        >
		  {name}
        </Title>
		<Title
		  fontFamily={FONTS.poppinsRegular}
		  fontSize={FONTS_SIZE.small14}
		>
		  {categoriesString && categoriesString}
		</Title>
      </InfoTexts>
	</View>
  )
}

export default RestaurantInfo;