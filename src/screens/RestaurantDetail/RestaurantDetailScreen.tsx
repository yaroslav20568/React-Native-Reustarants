import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import { Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RestaurantMenuItems, Modal, RestaurantInfo, RestaurantLoader, ViewCart, RestaurantMenuLoader } from '../../components/importComponents';
import { useActions, useAppSelector } from '../../redux/typedHooks';
import { IFood, IOnAddToCartPayload } from './../../types';
import { RootStackParamList } from '../../navigation/Stacks';
import restaurantMenuParser from '../../helpers/restaurantMenuParser';
import { useGetRestaurantQuery } from '../../redux/RTKQuery/restaurantsApi';
import { ViewCartWrapper } from '../styles';

interface PropsRestaurantDetailScreen extends NativeStackScreenProps<RootStackParamList, 'RestaurantDetail'> {}

const RestaurantDetailScreen = ({ route }: PropsRestaurantDetailScreen) => {
	const [menuItems, setMenuItems] = useState<Array<IFood> | undefined>(undefined);
	const [menuIsLoading, setMenuIsLoading] = useState<boolean>(false);

	const { restaurant, restaurantIsLoading } = useGetRestaurantQuery(route.params.id, {
		selectFromResult: ({ data, isLoading }) => ({ 
			restaurant: data,
			restaurantIsLoading: isLoading
		})
	});

	useEffect(() => {
		setMenuIsLoading(true);
		restaurantMenuParser(route.params.url)
			.then((data) => {
				setMenuItems(data);
				setMenuIsLoading(false);
			})
	}, [route.params.url]);

	const { addToCart } = useActions();
	const { cartItems, totalPrice } = useAppSelector(state => ({
		cartItems: state.cart.items,
		totalPrice: state.cart.totalPrice
	}));

	const onAddToCart = useCallback((obj: IOnAddToCartPayload): void => {
		addToCart(obj);
	}, []);

	const isItemInCart = useCallback((name: string): boolean => {
		return cartItems.some(cartItem => cartItem.name === name);
	}, []);

	const onOpenModal = useCallback((): void => {
		translateEndModal();
	}, []);

	const onCloseModal = useCallback((): void => {
		translateStartModal();
	}, []);

  const fadeAnimModal = useRef(new Animated.Value(-Dimensions.get('window').width)).current;
	
	const translateEndModal = (): void => {
    Animated.timing(fadeAnimModal, {
      toValue: 0,
      duration: 400,
			useNativeDriver: true
    }).start();
  };

	const translateStartModal = (): void => {
    Animated.timing(fadeAnimModal, {
      toValue: -Dimensions.get('window').width,
      duration: 400,
			useNativeDriver: true
    }).start();
  };

	return (
		<View style={{flex: 1}}>
			<ScrollView>
				{!restaurantIsLoading ? 
					<RestaurantInfo 
						photos={restaurant?.photos}
						name={restaurant?.name}
						rating={restaurant?.rating}
						price={restaurant?.price}
						categories={restaurant?.categories}
						review_count={restaurant?.review_count}
						hours={restaurant?.hours}
						phone={restaurant?.phone}
					/> : 
					<RestaurantLoader />}
				{!menuIsLoading ? 
					<RestaurantMenuItems 
						onAddToCart={onAddToCart} 
						isItemInCart={isItemInCart} 
						menuItems={menuItems}
						isOpenNow={restaurant?.hours[0].is_open_now}
					/> : 
					<RestaurantMenuLoader />}
			</ScrollView>
			<Animated.View
        style={{transform: [{ translateX: fadeAnimModal }], position: 'absolute', width: '100%', height: '100%', zIndex: 100 }}
      >
				<Modal 
					restaurantName={restaurant?.name} 
					onCloseModal={onCloseModal} 
					cartItems={cartItems}
					totalPrice={totalPrice}
				/>
			</Animated.View>
			{totalPrice !== 0 && 
				<ViewCartWrapper>
					<ViewCart 
						title="View Cart" 
						totalPrice={totalPrice} 
						onCallback={onOpenModal} 
					/>
				</ViewCartWrapper>}
		</View>
  )
}

export default RestaurantDetailScreen;