import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import { Dimensions } from 'react-native'
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from '../../constants';
import { Line, MenuItems, Modal, RestaurantInfo, ViewCart } from '../../components/importComponents';
import { useActions, useAppSelector } from '../../redux/typedHooks';
import { IFood } from './../../types';
import { RootStackParamList } from '../../navigation/Stacks';
import restaurantMenuParser from '../../helpers/restaurantMenuParser';
import { useGetRestaurantQuery } from '../../redux/RTKQuery/restaurantsApi';

interface IPayload {
	isChecked: boolean;
	item: IFood;
}

interface PropsRestaurantDetailScreen extends NativeStackScreenProps<RootStackParamList, 'RestaurantDetail'> {}

const ViewCartWrapper = styled.View`
	position: absolute;
	z-index: 10;
	bottom: 60;
	width: 70%;
	alignSelf: center;
`;

const RestaurantDetailScreen = ({ route }: PropsRestaurantDetailScreen) => {
  // const route: any = useRoute();

	// const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [foodItems, setFoodItems] = useState<Array<IFood> | undefined>();

	const { data } = useGetRestaurantQuery(route.params.id);

	useEffect(() => {
		restaurantMenuParser(route.params.url)
			.then((data) => setFoodItems(data))
	}, [route.params.url]);

	const { addToCart } = useActions();
	const { cartItems, totalPrice } = useAppSelector(state => ({
		cartItems: state.cart.items,
		totalPrice: state.cart.totalPrice
	}));

	const onAddToCart = useCallback((obj: IPayload) => {
		addToCart(obj);
	}, []);

	const isItemInCart = useCallback((id: number) => {
		return cartItems.some(cartItem => cartItem.id === id);
	}, []);

	const onOpenModal = useCallback(() => {
		// setModalIsOpen(true);
		translateEndModal();
	}, []);

	const onCloseModal = useCallback(() => {
		// setModalIsOpen(false);
		translateStartModal();
	}, []);

	// console.log(scrollPosition);
  const fadeAnimModal = useRef(new Animated.Value(-Dimensions.get('window').width)).current;
	
	const translateEndModal = () => {
    Animated.timing(fadeAnimModal, {
      toValue: 0,
      duration: 400,
			useNativeDriver: true
    }).start();
  };

	const translateStartModal = () => {
    Animated.timing(fadeAnimModal, {
      toValue: -Dimensions.get('window').width,
      duration: 400,
			useNativeDriver: true
    }).start();
  };

	return (
		<View style={{flex: 1}}>
			<ScrollView onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.y)}>
				{/* <RestaurantInfo {...route.params} /> */}
				<Line 
					width={100} 
					height={2} 
					backgroundColor={COLORS.black} 
				/>
				<MenuItems onAddToCart={onAddToCart} isItemInCart={isItemInCart} />
			</ScrollView>
			
			<Animated.View
        style={{transform: [{ translateX: fadeAnimModal }], position: 'absolute', width: '100%', height: '100%', zIndex: 100 }}
      >
				{/* <Modal 
					RestaurantName={route.params.name} 
					onCloseModal={onCloseModal} 
					cartItems={cartItems}
					totalPrice={totalPrice}
				/> */}
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