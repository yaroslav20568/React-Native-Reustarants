import React from 'react';
import { ScrollView } from 'react-native';
import { RestaurantsList, HeaderTabs, Categories, SearchPlacesInput } from '../../components/importComponents';
import { ICategory } from '../../types';
import { useActions, useAppSelector } from '../../redux/typedHooks';
import { useGetRestaurantsQuery } from '../../redux/RTKQuery/restaurantsApi';

const nameTabs: Array<string> = ['Delivery', 'Pickup'];
const shippingTypeItems: Array<ICategory> = [
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
	const { shippingMethod, cityName } = useAppSelector(state => ({
		shippingMethod: state.restaurantsFilter.shippingMethod,
		cityName: state.restaurantsFilter.cityName
	}));

	const { setShippingMethod, setCity } = useActions();

	const { restaurants, isLoading } = useGetRestaurantsQuery(cityName, {
		selectFromResult: ({ data, isLoading, isError }) => ({
			restaurants: !isError ? data?.businesses.filter(restaurant => restaurant.transactions.includes(shippingMethod.toLowerCase())) : [],
			isLoading
		})
	});

  return (
    <ScrollView 
			keyboardShouldPersistTaps='handled'
			style={{paddingHorizontal: 15}}
		>
			<HeaderTabs 
				nameTabs={nameTabs}
				shippingMethod={shippingMethod}
				setShippingMethod={setShippingMethod}
			/>
			<SearchPlacesInput 
				cityName={cityName}
				setCity={setCity}
			/>
			<Categories shippingTypeItems={shippingTypeItems} />
			<RestaurantsList 
				restaurants={restaurants}
				isLoading={isLoading}
			/>
    </ScrollView>
  );
};

export default HomeScreen;
