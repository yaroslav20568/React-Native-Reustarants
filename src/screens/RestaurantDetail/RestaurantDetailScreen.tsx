import React, { useState, useCallback, useEffect } from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { RestaurantMenuItems, CartModal, RestaurantInfo, RestaurantLoader, CartModalButton, RestaurantMenuLoader } from '../../components/importComponents';
import { useActions, useAppSelector } from '../../redux/typedHooks';
import { IFood, IOnAddToCartPayload } from './../../types';
import { RootStackParamList } from '../../navigation/Stacks';
import { restaurantMenuParser } from '../../helpers/importHelpers';
import { useGetRestaurantQuery } from '../../redux/RTKQuery/restaurantsApi';
import { CartModalButtonWrapper } from '../../components/RestaurantDetail/CartModalButton/styles';
import { CartModalWrapper } from '../../components/RestaurantDetail/CartModal/styles';

interface PropsRestaurantDetailScreen extends NativeStackScreenProps<RootStackParamList, 'RestaurantDetail'> {}

const RestaurantDetailScreen = ({ route }: PropsRestaurantDetailScreen) => {
	const { id, url } = route.params;
	const [menuItems, setMenuItems] = useState<Array<IFood> | undefined>(undefined);
	const [menuIsLoading, setMenuIsLoading] = useState<boolean>(false);
	const { addToCart, clearCart } = useActions();
	const { cartItems, totalPrice, shippingMethod } = useAppSelector(state => ({
		cartItems: state.cart.items,
		totalPrice: state.cart.totalPrice,
		shippingMethod: state.restaurantsFilter.shippingMethod
	}));

	const { restaurant, restaurantIsLoading } = useGetRestaurantQuery(id, {
		selectFromResult: ({ data, isLoading }) => ({ 
			restaurant: data,
			restaurantIsLoading: isLoading
		})
	});

	useEffect(() => {
		setMenuIsLoading(true);
		restaurantMenuParser(url)
			.then((data) => {
				setMenuItems(data);
				setMenuIsLoading(false);
			})
	}, [url]);

	const onAddToCart = useCallback((obj: IOnAddToCartPayload): void => {
		addToCart(obj);
	}, []);

	const isItemInCart = useCallback((name: string): boolean => {
		return cartItems.some(cartItem => cartItem.name === name);
	}, []);

	const { width } = useWindowDimensions();
	const translateX = useSharedValue<number>(0);
	
	const cartModalWrapperStyles = useAnimatedStyle(() => ({
		transform: [{translateX: interpolate(translateX.value, [0, 1], [-width, 0], Extrapolation.CLAMP)}]
	}));

	const onOpenModal = useCallback((): void => {
		translateX.value = withTiming(1, {duration: 400});
	}, []);

	const onCloseModal = useCallback((): void => {
		translateX.value = withTiming(0, {duration: 400});
	}, []);

	return (
		<>
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
			<CartModalWrapper
        style={cartModalWrapperStyles}
      >
				<CartModal 
					restaurantName={restaurant?.name} 
					onCloseModal={onCloseModal} 
					cartItems={cartItems}
					totalPrice={totalPrice}
					shippingMethod={shippingMethod}
					clearCart={clearCart}
					restaurantCoords={restaurant?.coordinates}
					restaurantAddress={`${restaurant?.location.address1}, ${restaurant?.location.city}`}
				/>
			</CartModalWrapper>
			{totalPrice !== 0 && 
				<CartModalButtonWrapper>
					<CartModalButton 
						title='View cart' 
						totalPrice={totalPrice} 
						onCallback={onOpenModal} 
					/>
				</CartModalButtonWrapper>}
		</>
  )
}

export default RestaurantDetailScreen;