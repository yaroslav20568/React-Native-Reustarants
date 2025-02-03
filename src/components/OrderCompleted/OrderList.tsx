import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';
import { IFood } from '../../types';
import { Image, Line, Title } from '../importComponents';

interface IProps {
	cartItems: Array<IFood>,
}

const OrderItem = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	paddingVertical: 20;
`;

const TitlesContainer = styled.View`
	width: 76%;
`;

const ImageContainer = styled.View`
	width: 24%;
`;

const OrderList = ({ cartItems }: IProps) => {
	return (
		<FlatList 
			data={cartItems}
			renderItem={({ item }) => 
				<>
					<OrderItem>
						<TitlesContainer>
							<Title 
								fontFamily={FONTS.poppinsSemiBold}
								fontSize={FONTS_SIZE.medium18}
							>
								{item.name}
							</Title>
							<Title>{item.price}</Title>
						</TitlesContainer>
						<ImageContainer>
							<Image img={item.image} width={100} height={110} borderRadius={10} />
						</ImageContainer>
					</OrderItem>
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

export default OrderList;