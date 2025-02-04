import React from 'react';
import { FlatList } from 'react-native';
import { COLORS } from '../../../constants';
import { IFood } from '../../../types';
import { Line } from '../../importComponents';
import { Container, TextsContainer, Name, Price, ImageContainer, Image } from './styles';

interface IProps {
	cartItems: Array<IFood>,
}

const OrderList = ({ cartItems }: IProps) => {
	return (
		<FlatList 
			data={cartItems}
			renderItem={({ item }) => 
				<>
					<Container>
						<TextsContainer>
							<Name>{item.name}</Name>
							<Price>{item.price}</Price>
						</TextsContainer>
						<ImageContainer>
							<Image 
								source={{uri: item.image}}
							/>
						</ImageContainer>
					</Container>
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