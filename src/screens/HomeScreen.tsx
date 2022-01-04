import React from 'react';
import { View } from 'react-native';
import Title from './../components/Title';
import { FONTS, COLORS, FONTS_SIZE } from './../constants';

const HomeScreen = () => {
  return (
    <View>
      <Title
        fontFamily={FONTS.poppinsSemiBold}
        fontSize={FONTS_SIZE.large30}
        color={COLORS.black}
      >
        Hey !
      </Title>

      <Title
        fontFamily={FONTS.poppinsMedium}
        fontSize={FONTS_SIZE.medium16}
        color={COLORS.mediumGray}
      >
        Let’s get your order
      </Title>
    </View>
  );
};

export default HomeScreen;
