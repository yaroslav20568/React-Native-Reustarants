import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS } from '../../constants';
import { Line } from '../importComponents';
import { IFood, IOnAddToCartPayload } from '../../types';
import { RestaurantMenuItemCheckboxWrapper, RestaurantMenuItemImage, RestaurantMenuItemImageWrapper, RestaurantMenuItemName, RestaurantMenuItemPrice, RestaurantMenuItemStyle, RestaurantMenuItemTextsWrapper } from './styles';

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
		}
		onAddToCart(obj);
	};

  return (
		<View>
			<RestaurantMenuItemStyle>
				<RestaurantMenuItemCheckboxWrapper>
					<BouncyCheckbox
						size={25}
						fillColor='green'
						unfillColor='transparent'
						innerIconStyle={{ borderRadius: 0, borderColor: COLORS.mediumGray }}
						iconStyle={{ borderRadius: 0 }}
						isChecked={isItemInCart(name)}
						onPress={handleAddToCart}
						disabled={!isOpenNow}
					/>
				</RestaurantMenuItemCheckboxWrapper>
				<RestaurantMenuItemTextsWrapper>
					<RestaurantMenuItemName>{name}</RestaurantMenuItemName>
					<RestaurantMenuItemPrice>{price}</RestaurantMenuItemPrice>
				</RestaurantMenuItemTextsWrapper>
				<RestaurantMenuItemImageWrapper>
					<RestaurantMenuItemImage 
						source={{uri: image}}
					/>
				</RestaurantMenuItemImageWrapper>
			</RestaurantMenuItemStyle>
			<Line 
				width={100} 
				height={1} 
				backgroundColor={COLORS.mediumGray} 
			/>
		</View>
  )
}

export default React.memo(RestaurantMenuItem);