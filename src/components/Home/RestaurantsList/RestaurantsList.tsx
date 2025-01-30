import React from 'react';
import { FlatList } from 'react-native';
import { RestaurantItem, RestaurantsLoader } from '../../importComponents';
import { IRestaurant } from '../../../types';
import { Container, EmptyText } from './styles';
import { FlatListSeparator } from '../../styles';

interface PropsRestaurantsList {
	restaurants: Array<IRestaurant> | undefined;
  isLoading: boolean;
}

const RestaurantsList = ({ restaurants, isLoading }: PropsRestaurantsList) => {
  const ListEmptyComponent = (): JSX.Element => {
		return (
			<EmptyText>Рестораны не найдены</EmptyText>
		);
	};

	const ItemSeparatorComponent = (): JSX.Element => {
		return (
			<FlatListSeparator 
				height={20} 
			/>
		);
	};

	return (
    <Container>
			{!isLoading ? 
        <FlatList
					data={restaurants}
					renderItem={({item}) => 
						<RestaurantItem 
							{...item} 
						/>
					}
					ListEmptyComponent={ListEmptyComponent}
					ItemSeparatorComponent={ItemSeparatorComponent}
					keyExtractor={(_, index) => `restaurantItem_${index}`}
				/> : 
        <RestaurantsLoader />}
    </Container>
  );
};

export default RestaurantsList;
