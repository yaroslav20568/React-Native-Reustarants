import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useGetRestaurantsQuery } from '../../redux/RTKQuery/restaurantsApi';
import { RestaurantItem, Title } from '../importComponents';

const RestaurantsList = () => {
  const { data, isLoading } = useGetRestaurantsQuery('');

  return (
    <View>
	  {!isLoading ? 
			data?.businesses.map((restaurant) => <RestaurantItem {...restaurant} />) : 
			<Title>Loading...</Title>}
    </View>
  );
};

export default RestaurantsList;
