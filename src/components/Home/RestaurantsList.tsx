import React from 'react';
import { FlatList, ScrollView, Text } from 'react-native';
import { useGetRestaurantsQuery } from '../../redux/RTKQuery/restaurantsApi';
import { RestaurantItem, Title } from '../importComponents';

const RestaurantsList = () => {
  const { data, isLoading } = useGetRestaurantsQuery('');

  return (
    <ScrollView>
	  {!isLoading ? 
			data?.businesses.map((restaurant) => <RestaurantItem {...restaurant} />) : 
			<Title>Loading...</Title>}
    </ScrollView>
  );
};

export default RestaurantsList;
