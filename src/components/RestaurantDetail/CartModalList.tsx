import React from 'react';
import { FlatList, View } from 'react-native';
import { COLORS } from '../../constants';
import { IFood } from '../../types';
import { Line } from '../importComponents';
import { CartModalItem, CartModalItemText } from './styles';

interface PropsCartModalList {
	cartItems: Array<IFood>
}

const CartModalList = ({ cartItems }: PropsCartModalList) => {
	return (
		<FlatList
			data={cartItems}
			renderItem={({item}) => 
				<View>
					<CartModalItem>
						<CartModalItemText>{item.name}</CartModalItemText>
						<CartModalItemText>{item.price}</CartModalItemText>
					</CartModalItem>
					<Line 
						width={100} 
						height={1} 
						backgroundColor={COLORS.mediumGray} 
					/>
				</View>
			}
			keyExtractor={(_, index) => `cartItem_${index}`}
		/>
	)
}

export default CartModalList;