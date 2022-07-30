import React, { useEffect } from 'react';
import { Title, HomeHeader, RestaurantsList, HeaderTabs } from '../../components/importComponents';
import { ScreenContainer } from '../styles';
import { FONTS, COLORS, FONTS_SIZE } from '../../constants';
// import { useAppSelector, useActions } from '../../redux/typedHooks';
// import { useGetRestaurantsQuery } from '../../redux/RTKQuery/restaurantsApi';

const nameTabs: Array<string> = ['Delivery', 'Pickup'];

const HomeScreen = () => {
//   const { cityName } = useAppSelector((state) => state.city)
//   const { setCity } = useActions();

//   const { data } = useGetRestaurantsQuery('');
//   console.log(data?.businesses);

  useEffect(() => {
	// setCity('London');
  }, []);

  return (
    <ScreenContainer>
	  <HomeHeader />
	  
	  <HeaderTabs nameTabs={nameTabs} />
	  
	  <RestaurantsList />
    </ScreenContainer>
  );
};

export default HomeScreen;
