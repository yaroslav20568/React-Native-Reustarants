import React from 'react';
import { FlatList, Image, Linking, View, useWindowDimensions } from 'react-native';
import { COLORS } from '../../../constants';
import { Line } from '../../importComponents';
import { Texts, Name, IsOpenNow, IsOpenNowWrapper, InfoParams, OpeningHours, OpeningHoursItem, OpeningHoursDay, OpeningHoursTime, OpeningHoursList, PhoneButton, PhoneText } from './styles';
import { IOpeningHour } from '../../../types';

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
	const textInfo = categories?.reduce((str, category) => str + category.title + ' · ', '') + `${price ? `${price} ·` : ''} 💳 · ${rating} ⭐ · (${review_count}+)`;

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
			<Texts>
				<Name>{name}</Name>
				<InfoParams>{textInfo}</InfoParams>
			</Texts>
			<Line 
				width={100} 
				height={2} 
				backgroundColor={COLORS.black} 
			/>
			<OpeningHours>
				<OpeningHoursList>
					{hours && 
						hours[0].open.map((hour, index) => 
							<OpeningHoursItem
								key={`RestaurantOpeningHoursItem_${index}`}
							>
								<OpeningHoursDay>{days[hour.day]}</OpeningHoursDay>
								<OpeningHoursTime>{transformTime(hour.start)} - {transformTime(hour.end)}</OpeningHoursTime>
							</OpeningHoursItem>
						)}
				</OpeningHoursList>
				<View>
					<PhoneButton
						activeOpacity={.7}
						onPress={() => Linking.openURL(`tel:${phone}`)}
					>
						<PhoneText>{phone}</PhoneText>
					</PhoneButton>
					<IsOpenNowWrapper
						isOpenNow={hours && hours[0].is_open_now}
					>
						<IsOpenNow>
							{hours && 
								hours[0].is_open_now ? 
								'Open' : 
								'Closed'} now
						</IsOpenNow>
					</IsOpenNowWrapper>
				</View>
			</OpeningHours>
			<Line 
				width={100} 
				height={2} 
				backgroundColor={COLORS.black} 
			/>
		</View>
  )
}

export default RestaurantInfo;