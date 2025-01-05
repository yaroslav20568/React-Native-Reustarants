import React from 'react';
import { FlatList, Image, Linking, View, useWindowDimensions } from 'react-native';
import { COLORS } from '../../constants';
import { Line } from '../importComponents';
import { RestaurantTexts, RestaurantName, RestaurantIsOpenNow, RestaurantIsOpenNowWrapper, RestaurantInfoParams, RestaurantOpeningHours, RestaurantOpeningHoursItem, RestaurantOpeningHoursDay, RestaurantOpeningHoursTime, RestaurantOpeningHoursList, RestaurantPhoneButton, RestaurantPhoneText } from './styles';
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
	phone: string | undefined;
}

interface IDay {
	[key: number]: string;
}

const days: IDay = {
	0: 'Sun',
	1: 'Mon',
	2: 'Tue',
	3: 'Wed',
	4: 'Thu',
	5: 'Fri',
	6: 'Sat'
}

const RestaurantInfo = ({ photos, name, rating, price, categories, review_count, hours, phone }: PropsRestaurantInfo) => {
  const { width } = useWindowDimensions();
	const restaurantTextInfo = categories?.reduce((str, category) => str + category.title + ' · ', '') + `${price ? `${price} ·` : ''} 💳 · ${rating} ⭐ · (${review_count}+)`;

	const transformTime = (time: string): string => {
		const splitTime = time.split('');

		return `${splitTime[0]}${splitTime[1]}:${splitTime[2]}${splitTime[3]}`;
	};

  return (
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
				keyExtractor={(_, index) => `photo_${index}`}
			/>
			<RestaurantTexts>
				<RestaurantName>{name}</RestaurantName>
				<RestaurantInfoParams>{restaurantTextInfo}</RestaurantInfoParams>
			</RestaurantTexts>
			<Line 
				width={100} 
				height={2} 
				backgroundColor={COLORS.black} 
			/>
			<RestaurantOpeningHours>
				<RestaurantOpeningHoursList>
					{hours && 
						hours[0].open.map((hour, index) => 
							<RestaurantOpeningHoursItem
								key={`RestaurantOpeningHoursItem_${index}`}
							>
								<RestaurantOpeningHoursDay>{days[hour.day]}</RestaurantOpeningHoursDay>
								<RestaurantOpeningHoursTime>{transformTime(hour.start)} - {transformTime(hour.end)}</RestaurantOpeningHoursTime>
							</RestaurantOpeningHoursItem>
						)}
				</RestaurantOpeningHoursList>
				<View>
					<RestaurantPhoneButton
						activeOpacity={.7}
						onPress={() => Linking.openURL(`tel:${phone}`)}
					>
						<RestaurantPhoneText>{phone}</RestaurantPhoneText>
					</RestaurantPhoneButton>
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
			</RestaurantOpeningHours>
			<Line 
				width={100} 
				height={2} 
				backgroundColor={COLORS.black} 
			/>
		</View>
  )
}

export default RestaurantInfo;