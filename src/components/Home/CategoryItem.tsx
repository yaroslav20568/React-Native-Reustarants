import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Title } from '../importComponents';
import { FONTS } from '../../constants';

interface PropsCategory {
  image: object,
  text: string
}

const CategoryItemContainer = styled.TouchableOpacity`
  alignItems: center;
  marginRight: 28;
`;

const CategoryItem = ({ image, text }: PropsCategory) => {
  return (
    <CategoryItemContainer>
      <Image
        source={image}
        style={{
          width: 50,
          height: 40,
          resizeMode: 'contain',
        }}
      />
      <Title fontFamily={FONTS.poppinsSemiBold}>{text}</Title>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
