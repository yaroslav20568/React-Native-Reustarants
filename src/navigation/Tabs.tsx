import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, FavoritesScreen, AccountScreen, CartScreen } from '../screens/importScreens';
import CustomTabs from './CustomTabs';
import { ITab } from '../types';

export type RootTabsParamList = {
	Home: undefined;
	Favorites: undefined;
	Account: undefined;
	Cart: undefined;
};

const tabsItems: Array<ITab> = [
  {name: 'Home', screen: HomeScreen, icon: 'home'},
  {name: 'Favorites', screen: FavoritesScreen, icon: 'heart'},
  {name: 'Account', screen: AccountScreen, icon: 'user'},
  {name: 'Cart', screen: CartScreen, icon: 'shopping-cart'}
];

const Tab = createBottomTabNavigator<RootTabsParamList>();

const Tabs = () => {
  return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false
			}}
			tabBar={(props) => 
				<CustomTabs 
					{...props} 
					tabsItems={tabsItems}
				/>
			}
		>
			{tabsItems.map((tabContent, index) => {
				return (
					<Tab.Screen 
						name={tabContent.name} 
						component={tabContent.screen}
						key={`${tabContent.name}_${index}`}
					/>
				)
			})}
		</Tab.Navigator>
  );
};

export default Tabs;
