import React, { useEffect } from 'react';
import { Title, HomeHeader } from '../../components/importComponents';
import { ScreenContainer } from '../styles';
import { FONTS, COLORS, FONTS_SIZE } from '../../constants';

const HomeScreen = () => {
  return (
    <ScreenContainer>
	  <HomeHeader />

      <Title
        fontFamily={FONTS.poppinsSemiBold}
        fontSize={FONTS_SIZE.large30}
      >
        Hey !
      </Title>

      <Title
        fontSize={FONTS_SIZE.medium16}
        color={COLORS.mediumGray}
      >
        Let’s get your order
      </Title>
    </ScreenContainer>
  );
};

export default HomeScreen;
