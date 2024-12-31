import React from 'react';
import { FlatList, Image, View, useWindowDimensions } from 'react-native';
import { COLORS } from '../../constants';
import { Line } from '../importComponents';
import { RestaurantTexts, RestaurantName, RestaurantIsOpenNow, RestaurantIsOpenNowWrapper, RestaurantInfoParams } from './styles';
import { IOpeningHour } from '../../types';

interface PropsRestaurantInfo {
	photos: Array<string> | undefined;
	name: string | undefined;
  rating: number | undefined;
  price: string | undefined;
	categories: Array<{
		title: string;
	}> | undefined;
	review_count: number | undefined;
	hours: Array<IOpeningHour> | undefined;
}

const RestaurantInfo = ({ photos, name, rating, price, categories, review_count, hours }: PropsRestaurantInfo) => {
  const { width } = useWindowDimensions();
	const restaurantTextInfo = categories?.reduce((str, category) => str + category.title + ' · ', '') + `${price ? `${price} ·` : ''} 💳 · ${rating} ⭐ · (${review_count}+)`;

  return (
		<View>
			<View>
				<FlatList 
					data={photos}
					renderItem={({item}) => 
						<Image
							source={{uri: item}}
							style={{width: width, aspectRatio: 1.7}}
						/>
					}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
				/>
				<RestaurantIsOpenNowWrapper
					isOpenNow={hours && hours[0].is_open_now}
				>
					<RestaurantIsOpenNow>
						{hours && 
							hours[0].is_open_now ? 
							'Open' : 
							'Closed'} now
					</RestaurantIsOpenNow>
				</RestaurantIsOpenNowWrapper>
			</View>
			<RestaurantTexts>
				<RestaurantName>{name}</RestaurantName>
				<RestaurantInfoParams>{restaurantTextInfo}</RestaurantInfoParams>
			</RestaurantTexts>
			<Line 
				width={100} 
				height={2} 
				backgroundColor={COLORS.black} 
			/>
		</View>
  )
}

export default RestaurantInfo;