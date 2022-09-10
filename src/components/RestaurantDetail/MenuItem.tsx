import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';
import { Title, Image, Line } from '../importComponents';

interface IFood {
	title: string,
	description: string,
	price: string,
	image: string
}

const MenuItemContainer = styled.View`
	// paddingVertical: 20;
`;

const MenuItemInfo = styled.View`
	flexDirection: row;
	alignItems: center;
	paddingVertical: 20;
`;

const TitlesContainer = styled.View`
	width: 65.7%;
`;

const MenuItem = ({title, description, price, image}: IFood) => {
	const [isSelected, setIsSelected] = useState<boolean>(false);

	const onChecked = (): void => {
		setIsSelected(prevState => !prevState);
	};

  return (
		<MenuItemContainer>
			<MenuItemInfo>
				<BouncyCheckbox
					size={25}
					fillColor="green"
					unfillColor="transparent"
					innerIconStyle={{ borderRadius: 0, borderColor: COLORS.mediumGray }}
					iconStyle={{ borderRadius: 0 }}
					isChecked={isSelected}
					onPress={onChecked}
				/>
				<TitlesContainer>
					<Title 
						fontFamily={FONTS.poppinsSemiBold}
						fontSize={FONTS_SIZE.medium18}
					>
						{title}
					</Title>
					<Title>{description}</Title>
					<Title>{price}</Title>
				</TitlesContainer>
				<Image img={image} width={90} height={110} borderRadius={10} />
			</MenuItemInfo>

			<Line 
				width={100} 
				height={1} 
				backgroundColor={COLORS.mediumGray} 
			/>
		</MenuItemContainer>
  )
}

export default MenuItem;