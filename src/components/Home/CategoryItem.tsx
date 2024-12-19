import React from 'react';
import { CategoryItemContainer, CategoryItemImage, CategoryItemText } from './styles';

interface PropsCategory {
  image: object;
  text: string;
}

const CategoryItem = ({ image, text }: PropsCategory) => {
  return (
    <CategoryItemContainer
			activeOpacity={.7}
		>
			<CategoryItemImage 
				source={image}
			/>
			<CategoryItemText>{text}</CategoryItemText>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
