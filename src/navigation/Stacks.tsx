import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantDetail, OrderCompleted, OtpScreen } from '../screens/importScreens';
import Tabs from './Tabs';
import { IFood, IRestaurant } from '../types';

export type RootStackParamList = {
	Otp: undefined;
	Tabs: undefined;
	RestaurantDetail: IRestaurant;
	OrderCompleted: {
		RestaurantName: string;
		totalPrice: number
		cartItems: Array<IFood>;
	}
};

const Stacks = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
			<Stack.Screen name="OrderCompleted" component={OrderCompleted} />
		</Stack.Navigator>
  )
}

export default Stacks;