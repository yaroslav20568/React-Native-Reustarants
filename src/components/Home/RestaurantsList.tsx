import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useGetRestaurantsQuery } from '../../redux/RTKQuery/restaurantsApi';
import { useAppSelector } from '../../redux/typedHooks';
import { RestaurantItem, Loader } from '../importComponents';

const RestaurantsList = () => {
  const shippingMethod = useAppSelector((state) => state.shippingMethod);
  const { restaurants, isLoading } = useGetRestaurantsQuery('LosAngeles', {
    selectFromResult: ({ data, isLoading }) => ({
      restaurants: data?.businesses.filter(restaurant => restaurant.transactions.includes(shippingMethod.name.toLowerCase())),
      isLoading: isLoading
		}),
  });

  return (
    <View>
			{!isLoading ? 
        <FlatList
					data={restaurants}
					renderItem={({ item }) => <RestaurantItem {...item} />}
				/> : 
        <Loader />}
    </View>
  );
};

export default RestaurantsList;
