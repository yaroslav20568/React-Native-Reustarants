import React from 'react';
import { Image } from 'react-native';
import { Title } from '../importComponents';
import { FONTS } from '../../constants';
import { CategoryItemContainer } from './styles';

interface PropsCategory {
  image: object,
  text: string
}

const CategoryItem = ({ image, text }: PropsCategory) => {
  return (
    <CategoryItemContainer>
      <Image
        source={image}
        style={{
          width: 50,
          height: 40
        }}
      />
      <Title fontFamily={FONTS.poppinsSemiBold}>{text}</Title>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
