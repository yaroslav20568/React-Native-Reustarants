import React from 'react';
import { FlatList } from 'react-native';
import { RestaurantMenuItem } from '../../importComponents';
import { IFood, IOnAddToCartPayload } from '../../../types';
import { MenuItemsWrapper } from './styles';

interface IProps {
	onAddToCart: (obj: IOnAddToCartPayload) => void;
	isItemInCart: (name: string) => boolean;
	menuItems: Array<IFood> | undefined;
	isOpenNow: boolean | undefined;
}

const RestaurantMenuItems = ({ onAddToCart, isItemInCart, menuItems, isOpenNow }: IProps) => {
  return (
		<MenuItemsWrapper>
			<FlatList
        data={menuItems}
        renderItem={({item}) => 
					<RestaurantMenuItem 
						{...item} 
						onAddToCart={onAddToCart} 
						isItemInCart={isItemInCart} 
						isOpenNow={isOpenNow}
					/>
				}
				keyExtractor={(_, index) => `restaurantMenuItem_${index}`}
			/>
		</MenuItemsWrapper>
  )
}

export default RestaurantMenuItems;