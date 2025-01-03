import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { RestaurantDetail, OrderCompleted, OtpScreen } from '../screens/importScreens';
import Tabs from './Tabs';
import { IFood, IUser } from '../types';

export type RootStackParamList = {
	Otp: undefined;
	Tabs: undefined;
	RestaurantDetail: {
		id: string;
		url: string;
	};
	OrderCompleted: {
		restaurantName: string;
		totalPrice: number
		cartItems: Array<IFood>;
	};
};

const Stacks = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false);
  const Stack = createNativeStackNavigator<RootStackParamList>();

	const findUserFromFirestore = async () => {
		const user: IUser | null = JSON.parse(await AsyncStorage.getItem('user-data') as string);

		const findUser = (await firestore().collection('users').where('phone', '==', user?.phone).get())
			.docs.map(doc => doc.data())[0];

		if(findUser) {
			setIsAuth(true);
		}
	};

	useEffect(() => {
		findUserFromFirestore();
	}, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
			{!isAuth ? 
				<Stack.Screen name="Otp" component={OtpScreen} /> : 
				<>
					<Stack.Screen name="Tabs" component={Tabs} />
					<Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
					<Stack.Screen name="OrderCompleted" component={OrderCompleted} />
				</>}
		</Stack.Navigator>
  )
}

export default Stacks;