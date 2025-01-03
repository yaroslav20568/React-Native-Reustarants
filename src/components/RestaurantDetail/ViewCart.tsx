import React from 'react';
import styled from 'styled-components/native';
import { Title } from '../importComponents';
import { COLORS, FONTS_SIZE } from '../../constants';

interface IProps {
	title: string,
	totalPrice: number,
	onCallback: () => void
}

const ViewCartContainer = styled.TouchableOpacity`
	height: 45;
	backgroundColor: ${COLORS.black};
	border-radius: 40;
	align-items: center;
	justify-content: center;
`;

const TotalPriceWrapper = styled.View`
	position: absolute;
	right: 20;
`;

const ViewCart = ({ title, totalPrice, onCallback }: IProps) => {
	return (
		<ViewCartContainer 
			activeOpacity={.7}
			onPress={onCallback}
		>
			<Title 
				color={COLORS.white} 
				fontSize={FONTS_SIZE.medium16}
			>
				{title}
			</Title>
			<TotalPriceWrapper>
				<Title 
					color={COLORS.white}
				>
					{`$${(totalPrice)}`}
				</Title>
			</TotalPriceWrapper>
		</ViewCartContainer>
	)
}

export default ViewCart;