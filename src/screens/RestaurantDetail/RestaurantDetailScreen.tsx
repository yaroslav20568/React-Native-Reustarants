import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Image, MenuItems, RestaurantInfo } from '../../components/importComponents';

const RestaurantDetailScreen = () => {
  const route: any = useRoute();

  return (
	<View>
	  <RestaurantInfo {...route.params} />
	  {/* <MenuItems /> */}
	</View>
  )
}

export default RestaurantDetailScreen;