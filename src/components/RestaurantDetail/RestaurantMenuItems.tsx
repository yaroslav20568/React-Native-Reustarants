import React from 'react';
import { FlatList } from 'react-native';
import { RestaurantMenuItem } from '../importComponents';
import { IFood } from '../../types';
import { MenuItemsWrapper } from './styles';

interface IOnAddToCartPayload {
	isChecked: boolean;
	item: IFood;
}

interface IProps {
	onAddToCart: (obj: IOnAddToCartPayload) => void;
	isItemInCart: (name: string) => boolean;
	menuItems: Array<IFood> | undefined;
}

const RestaurantMenuItems = ({ onAddToCart, isItemInCart, menuItems }: IProps) => {
  return (
		<MenuItemsWrapper>
			<FlatList
        data={menuItems}
        renderItem={({item}) => 
					<RestaurantMenuItem 
						{...item} 
						onAddToCart={onAddToCart} 
						isItemInCart={isItemInCart} 
					/>
				}
			/>
		</MenuItemsWrapper>
  )
}

export default RestaurantMenuItems;