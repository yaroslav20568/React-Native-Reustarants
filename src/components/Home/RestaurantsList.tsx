import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useGetRestaurantsQuery } from '../../redux/RTKQuery/restaurantsApi';
import { RestaurantItem, Loader } from '../importComponents';

const RestaurantsList = () => {
  const { data, isLoading } = useGetRestaurantsQuery('');

  return (
    <View>
	  {!isLoading ? 
	    data?.businesses.map((restaurant) => <RestaurantItem {...restaurant} />) : 
	    <Loader />}
    </View>
  );
};

export default RestaurantsList;
