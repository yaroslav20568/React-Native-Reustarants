import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS } from '../../../constants';
import { Line } from '../../importComponents';
import { IFood, IOnAddToCartPayload } from '../../../types';
import { MenuItemCheckboxWrapper, MenuItemImage, MenuItemImageWrapper, MenuItemName, MenuItemPrice, MenuItem, MenuItemTextsWrapper } from './styles';

interface IProps extends IFood {
	onAddToCart: (obj: IOnAddToCartPayload) => void;
	isItemInCart: (name: string) => boolean;
	isOpenNow: boolean | undefined;
}

const RestaurantMenuItem = ({ name, price, image, onAddToCart, isItemInCart, isOpenNow }: IProps) => {
	const handleAddToCart = (isChecked: boolean): void => {
		const obj = {
			isChecked,
			item: {
				name,
				price,
				image
			}
		};
		
		onAddToCart(obj);
	};

  return (
		<View>
			<MenuItem>
				<MenuItemCheckboxWrapper>
					<BouncyCheckbox
						size={25}
						fillColor='green'
						unfillColor='transparent'
						innerIconStyle={{borderRadius: 0, borderColor: COLORS.mediumGray}}
						iconStyle={{borderRadius: 0}}
						isChecked={isItemInCart(name)}
						onPress={handleAddToCart}
						disabled={!isOpenNow}
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
			</MenuItem>
			<Line 
				width={100} 
				height={1} 
				backgroundColor={COLORS.mediumGray} 
			/>
		</View>
  )
}

export default React.memo(RestaurantMenuItem);