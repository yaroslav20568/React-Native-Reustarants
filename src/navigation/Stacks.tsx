import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { RestaurantDetail, OrderCompleted, OtpScreen, MapScreen, LoadingScreen } from '../screens/importScreens';
import Tabs from './Tabs';
import { ICoordinate, IFood, IUser } from '../types';

export type RootStackParamList = {
	Loading: undefined;
	Otp: undefined;
	Tabs: undefined;
	RestaurantDetail: {
		id: string;
		url: string;
	};
	OrderCompleted: {
		restaurantName: string | undefined;
		totalPrice: number;
		cartItems: Array<IFood>;
	};
	Map: {
		orderId: string;
		restaurantCoords: ICoordinate;
	};
};

const Stacks = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const [isAuth, setIsAuth] = useState<boolean>(false);
  const Stack = createNativeStackNavigator<RootStackParamList>();

	const findUserFromFirestore = async () => {
		const user: IUser | null = JSON.parse(await AsyncStorage.getItem('user-data') as string);

		const findUser = (await firestore().collection<IUser>('users').where('phone', '==', user?.phone).get())
			.docs.map(doc => doc.data())[0];

		if(findUser) {
			setIsAuth(true);
			setUser(findUser);
		}
	};

	useEffect(() => {
		findUserFromFirestore();
	}, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
			{!isAuth ? 
				<Stack.Screen name="Loading" component={LoadingScreen} /> : 
				<>
					{!user ? 
					<Stack.Screen name="Otp" component={OtpScreen} /> :
					<Stack.Screen name="Tabs" component={Tabs} />}
					<Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
					<Stack.Screen name="OrderCompleted" component={OrderCompleted} />
					<Stack.Screen name="Map" component={MapScreen} />
				</>}
		</Stack.Navigator>
  )
}

export default Stacks;