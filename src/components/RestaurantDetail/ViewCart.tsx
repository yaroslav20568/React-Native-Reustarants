import React from 'react';
import styled from 'styled-components/native';
import { Title } from '../importComponents';
import { COLORS, FONTS_SIZE } from '../../constants';

interface IProps {
	title: string,
	totalPrice: number
}

const ViewCartContainer = styled.TouchableOpacity`
	position: absolute;
	z-index: 10;
	bottom: 70;
	paddingHorizontal: 60;
	width: 100%;
	// background: #999;
`;

const ViewCartInner = styled.View`
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

function ViewCart({ title, totalPrice }: IProps) {
	return (
		<ViewCartContainer onPress={() => console.log(1)}>
			<ViewCartInner>
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
			</ViewCartInner>
		</ViewCartContainer>
	)
}

export default ViewCart;