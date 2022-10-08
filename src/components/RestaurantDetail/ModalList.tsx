import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../constants';
import { IFood } from '../../types';
import { Line, Title } from '../importComponents';

interface IProps {
	cartItems: Array<IFood>
}

const CartItem = styled.View`
	flex-direction: row;
	justify-content: space-between;
	paddingHorizontal: 20;
	paddingVertical: 20;
`;

function ModalList({ cartItems }: IProps) {
	return (
		<FlatList
			data={cartItems}
			renderItem={({ item }) => 
				<>
					<CartItem>
						<Title>{item.title}</Title>
						<Title>{item.price}</Title>
					</CartItem>
					<Line 
						width={100} 
						height={1} 
						backgroundColor={COLORS.mediumGray} 
					/>
				</>
			}
		/>
	)
}

export default ModalList;