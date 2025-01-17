import React from 'react';
import { CategoryContainer, CategoryImage, CategoryText } from './styles';

interface PropsCategory {
  image: object;
  text: string;
}

const CategoryItem = ({ image, text }: PropsCategory) => {
  return (
    <CategoryContainer
			activeOpacity={.7}
		>
			<CategoryImage 
				source={image}
			/>
			<CategoryText>{text}</CategoryText>
    </CategoryContainer>
  );
};

export default CategoryItem;
