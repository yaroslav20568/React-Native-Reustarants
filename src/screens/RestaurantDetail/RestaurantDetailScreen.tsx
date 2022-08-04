import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS } from '../../constants';
import { Image, Line, MenuItems, RestaurantInfo } from '../../components/importComponents';

const RestaurantDetailScreen = () => {
  const route: any = useRoute();

  return (
	<View>
	  <RestaurantInfo {...route.params} />
	  <Line 
        width={100} 
        height={2} 
        backgroundColor={COLORS.black} 
      />
	  {/* <MenuItems /> */}
	</View>
  )
}

export default RestaurantDetailScreen;