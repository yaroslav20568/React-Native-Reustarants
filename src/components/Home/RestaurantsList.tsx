import React from 'react';
import { FlatList, View } from 'react-native';
import { RestaurantItem, Loader, Title } from '../importComponents';
import { IRestaurant } from '../../types';
import { FONTS_SIZE } from '../../constants';

interface PropsRestaurantsList {
	restaurants: Array<IRestaurant> | undefined;
  isLoading: boolean;
}

const RestaurantsList = ({ restaurants, isLoading }: PropsRestaurantsList) => {
  const ListEmptyComponent = (): JSX.Element => {
		return (
			<Title fontSize={FONTS_SIZE.medium18}>Рестараны не найдены</Title>
		);
	};

	return (
    <View>
			{!isLoading ? 
        <FlatList
					data={restaurants}
					renderItem={({ item }) => <RestaurantItem {...item} />}
					ListEmptyComponent={ListEmptyComponent}
					keyExtractor={(_, index) => `restaurantItem_${index}`}
				/> : 
        <Loader />}
    </View>
  );
};

export default RestaurantsList;
