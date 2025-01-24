import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { MenuItemCheckboxLoader, MenuItemCheckboxWrapperLoader, MenuItemImageLoader, MenuItemImageWrapperLoader, MenuItemLineLoader, MenuItemLoaderStyle, MenuItemNameLoader, MenuItemPriceLoader, MenuItemsWrapperLoader, MenuItemTextsWrapperLoader } from './styles';

const RestaurantMenuLoader = () => {
	return (
		<MenuItemsWrapperLoader>
			{[...Array(10)].map((_, index) => 
				<RestaurantMenuItemLoader 
					key={`RestaurantMenuItem_${index}`}
				/>
			)}
		</MenuItemsWrapperLoader>
	)
}

const RestaurantMenuItemLoader = () => {
	const menuItemCheckboxLoaderOpacity = useSharedValue<number>(0.4);
	const menuItemNameLoaderOpacity = useSharedValue<number>(0.4);
	const menuItemPriceLoaderOpacity = useSharedValue<number>(0.4);
	const menuItemImageLoaderOpacity = useSharedValue<number>(0.4);
	const menuItemLineLoaderOpacity = useSharedValue<number>(0.4);

	const menuItemCheckboxLoaderStyles = useAnimatedStyle(() => ({
		opacity: menuItemCheckboxLoaderOpacity.value
	}));

	const menuItemNameLoaderStyles = useAnimatedStyle(() => ({
		opacity: menuItemNameLoaderOpacity.value
	}));

	const menuItemPriceLoaderStyles = useAnimatedStyle(() => ({
		opacity: menuItemPriceLoaderOpacity.value
	}));

	const menuItemImageLoaderStyles = useAnimatedStyle(() => ({
		opacity: menuItemImageLoaderOpacity.value
	}));

	const menuItemLineLoaderStyles = useAnimatedStyle(() => ({
		opacity: menuItemLineLoaderOpacity.value
	}));

	useEffect(() => {
		menuItemCheckboxLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		menuItemNameLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		menuItemPriceLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		menuItemImageLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
		menuItemLineLoaderOpacity.value = withRepeat(withTiming(1), -1, true);
	}, []);

	return (
		<View>
			<MenuItemLoaderStyle>
				<MenuItemCheckboxWrapperLoader>
					<MenuItemCheckboxLoader 
						style={menuItemCheckboxLoaderStyles}
					/>
				</MenuItemCheckboxWrapperLoader>
				<MenuItemTextsWrapperLoader>
					<MenuItemNameLoader 
						style={menuItemNameLoaderStyles}
					/>
					<MenuItemPriceLoader 
						style={menuItemPriceLoaderStyles}
					/>
				</MenuItemTextsWrapperLoader>
				<MenuItemImageWrapperLoader>
					<MenuItemImageLoader 
						style={menuItemImageLoaderStyles}
					/>
				</MenuItemImageWrapperLoader>
			</MenuItemLoaderStyle>
			<MenuItemLineLoader 
				style={menuItemLineLoaderStyles}
			/>
		</View>
	)
}

export default RestaurantMenuLoader;
