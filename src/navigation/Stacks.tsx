import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantDetail, OrderCompleted } from '../screens/importScreens';
import Tabs from './Tabs';

const Stacks = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
			<Stack.Screen name="OrderCompleted" component={OrderCompleted} />
	</Stack.Navigator>
  )
}

export default Stacks;