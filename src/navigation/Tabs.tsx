import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, FavoritesScreen, AccountScreen, CartScreen } from '../screens/importScreens';
import { Title } from './../components/importComponents';
import { COLORS, ICONS } from './../constants';

const tabsContent = [
  {name: 'Home', screen: HomeScreen, icon: ICONS.homeIcon},
  {name: 'Favorites', screen: FavoritesScreen, icon: ICONS.favoritesIcon},
  {name: 'Account', screen: AccountScreen, icon: ICONS.accountIcon},
  {name: 'Cart', screen: CartScreen, icon: ICONS.cartIcon},
];

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 66,
            paddingVertical: 6,
            position: 'absolute',
            bottom: 0
          }
        }}
      >
        {
          tabsContent.map((tabContent, index) => {
            return (
              <Tab.Screen 
                key={`${tabContent.name}_${index}`}
                name={tabContent.name} 
                component={tabContent.screen} 
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View style={focused ? {alignItems: 'center', position: 'absolute', bottom: 10} : {alignItems: 'center'}}>
                        <Image
                          source={tabContent.icon}
                          style={{width: 20, height: 20, marginBottom: 4, tintColor: focused ? COLORS.red : COLORS.mediumGray}}
                        />
                        <Title 
                          fontSize={14} 
                          color={focused ? COLORS.red : COLORS.mediumGray}
                        >
                          {tabContent.name}
                        </Title>
                      </View>
                    );
                  }
                }}
              />
            )
          })
        }
    </Tab.Navigator>
  );
};

export default Tabs;
