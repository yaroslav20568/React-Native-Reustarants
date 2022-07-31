import React, { useEffect } from 'react';
import { Title, HomeHeader, RestaurantsList, HeaderTabs, Categories } from '../../components/importComponents';
import { ScreenContainer } from '../styles';

interface ICategory {
  image: object,
  text: string
}

const nameTabs: Array<string> = ['Delivery', 'Pickup'];
const categoryItems: Array<ICategory> = [
  {
    image: require('../../assets/icons/categories/shopping-bag.png'),
	text: 'Pick-up'
  },
  {
    image: require('../../assets/icons/categories/soft-drink.png'),
	text: 'Soft Drinks'
  },
  {
    image: require('../../assets/icons/categories/bread.png'),
	text: 'Bakery Items'
  },
  {
    image: require('../../assets/icons/categories/fast-food.png'),
	text: 'Fast Foods'
  },
  {
    image: require('../../assets/icons/categories/deals.png'),
	text: 'Deals'
  },
  {
    image: require('../../assets/icons/categories/coffee.png'),
	text: 'Coffee & Tea'
  },
  {
    image: require('../../assets/icons/categories/desserts.png'),
	text: 'Desserts'
  }
];

const HomeScreen = () => {
  return (
    <ScreenContainer>
	  <HomeHeader />
	  
	  <HeaderTabs nameTabs={nameTabs} />

	  <Categories categoryItems={categoryItems} />
	  
	  <RestaurantsList />
    </ScreenContainer>
  );
};

export default HomeScreen;
