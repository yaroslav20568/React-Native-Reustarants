import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS } from '../../constants';
import { Line } from '../importComponents';
import { IFood } from '../../types';
import { MenuItemCheckboxWrapper, MenuItemImage, MenuItemImageWrapper, MenuItemName, MenuItemPrice, MenuItemStyle, MenuItemTextsWrapper } from './styles';

interface IOnAddToCartPayload {
	isChecked: boolean;
	item: IFood;
}

interface IProps extends IFood {
	onAddToCart: (obj: IOnAddToCartPayload) => void;
	isItemInCart: (name: string) => boolean;
}

const RestaurantMenuItem = ({ name, price, image, onAddToCart, isItemInCart }: IProps) => {
	const handleAddToCart = (isChecked: boolean) => {
		const obj = {
			isChecked,
			item: {
				name,
				price,
				image
			}
		}
		onAddToCart(obj);
	};

  return (
		<View>
			<MenuItemStyle>
				<MenuItemCheckboxWrapper>
					<BouncyCheckbox
						size={25}
						fillColor='green'
						unfillColor='transparent'
						innerIconStyle={{ borderRadius: 0, borderColor: COLORS.mediumGray }}
						iconStyle={{ borderRadius: 0 }}
						isChecked={isItemInCart(name)}
						onPress={handleAddToCart}
					/>
				</MenuItemCheckboxWrapper>
				<MenuItemTextsWrapper>
					<MenuItemName>{name}</MenuItemName>
					<MenuItemPrice>{price}</MenuItemPrice>
				</MenuItemTextsWrapper>
				<MenuItemImageWrapper>
					<MenuItemImage 
						source={{uri: image}}
					/>
				</MenuItemImageWrapper>
			</MenuItemStyle>
			<Line 
				width={100} 
				height={1} 
				backgroundColor={COLORS.mediumGray} 
			/>
		</View>
  )
}

export default RestaurantMenuItem;