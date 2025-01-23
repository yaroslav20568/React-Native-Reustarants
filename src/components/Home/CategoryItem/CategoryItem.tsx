import React from 'react';
import { Container, Image, Name } from './styles';

interface PropsCategory {
  image: object;
  text: string;
}

const CategoryItem = ({ image, text }: PropsCategory) => {
  return (
    <Container
			activeOpacity={.7}
		>
			<Image 
				source={image}
			/>
			<Name>{text}</Name>
    </Container>
  );
};

export default CategoryItem;
