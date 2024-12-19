import React from 'react';
import { FlatList } from 'react-native';
import { RestaurantItem, Loader } from '../importComponents';
import { IRestaurant } from '../../types';
import { FlatListSeparator, RestaurantsContainer, RestaurantsEmptyText } from './styles';

interface PropsRestaurantsList {
	restaurants: Array<IRestaurant> | undefined;
  isLoading: boolean;
}

const RestaurantsList = ({ restaurants, isLoading }: PropsRestaurantsList) => {
  const ListEmptyComponent = (): JSX.Element => {
		return (
			<RestaurantsEmptyText>Рестораны не найдены</RestaurantsEmptyText>
		);
	};

	const ItemSeparatorComponent = (): JSX.Element => {
		return (
			<FlatListSeparator height={20} />
		);
	};

	return (
    <RestaurantsContainer>
			{!isLoading ? 
        <FlatList
					data={restaurants}
					renderItem={({ item }) => <RestaurantItem {...item} />}
					ListEmptyComponent={ListEmptyComponent}
					ItemSeparatorComponent={ItemSeparatorComponent}
					keyExtractor={(_, index) => `restaurantItem_${index}`}
				/> : 
        <Loader />}
    </RestaurantsContainer>
  );
};

export default RestaurantsList;
