import React from 'react';
import styled from 'styled-components/native';
import { MenuItem } from '../../components/importComponents';

interface IFood {
	id: number,
	title: string,
	description: string,
	price: string,
	image: string
}

interface IPayload {
	isChecked: boolean;
	item: IFood;
}

interface IProps {
	onAddToCart: (obj: IPayload) => void,
	isItemInCart: (id: number) => boolean
}

interface IFood {
	id: number,
	title: string,
	description: string,
	price: string,
	image: string
}

const MenuItemsContainer = styled.View`
	paddingVertical: 15;
	paddingHorizontal: 15;
`;

const foodItems: Array<IFood> = [
	{
		id: 1,
		title: 'Yorkshire pudding',
		description: 'Traditional english pudding',
		price: '$13.50',
		image: 'https://realfood.tesco.com/media/images/Yorkshire-puddings-1400x919-5d5494f0-b313-48b3-b423-2179f1233e8e-0-1400x919.jpg'
	},
	{
		id: 2,
		title: 'Lasagna',
		description: 'With butter lettuce, tomato and sauce bechamel',
		price: '$20',
		image: 'https://cdn.vkuso.ru/uploads/105744_4f57b20d1f80622c3eca60e7d976a6fb_270920-091138.jpg'
	},
	{
		id: 3,
		title: 'French fries',
		description: 'Deep fried potato pieces',
		price: '$34.20',
		image: 'https://saleonvine.ru/wp-content/uploads/2020/04/s-7fe516830a9ab07aee104122ac4c154bba311172.jpg'
	},
	{
		id: 4,
		title: 'Draniki',
		description: 'Potato pancakes and pancakes',
		price: '$15.50',
		image: 'https://grandgames.net/puzzle/f1200/draniki_.jpg'
	}
];

const MenuItems = ({ onAddToCart, isItemInCart }: IProps) => {
  return (
		<MenuItemsContainer>
			{foodItems.map(foodItem => <MenuItem {...foodItem} onAddToCart={onAddToCart} isItemInCart={isItemInCart} />)}
		</MenuItemsContainer>
  )
}

export default MenuItems;