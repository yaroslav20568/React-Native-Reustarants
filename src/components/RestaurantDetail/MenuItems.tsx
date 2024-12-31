import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { MenuItem } from '../../components/importComponents';
import { IFood } from './../../types';

interface IPayload {
	isChecked: boolean;
	item: IFood;
}

interface IProps {
	onAddToCart: (obj: IPayload) => void;
	isItemInCart: (id: number) => boolean;
	restaurantMenuItems: Array<IFood> | undefined;
}

const MenuItemsContainer = styled.View`
	paddingVertical: 15;
	paddingHorizontal: 15;
`;

const MenuItems = ({ onAddToCart, isItemInCart, restaurantMenuItems }: IProps) => {
  return (
		<MenuItemsContainer>
			<FlatList
        data={restaurantMenuItems}
        renderItem={({ item }) => <MenuItem {...item} onAddToCart={onAddToCart} isItemInCart={isItemInCart} />}
			/>
		</MenuItemsContainer>
  )
}

export default MenuItems;