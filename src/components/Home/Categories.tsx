import React from 'react';
import styled from 'styled-components/native';
import { CategoryItem } from '../importComponents';

interface ICategory {
  image: object,
  text: string
}

interface PropsCategories {
  categoryItems: Array<ICategory>
}

const CategoriesContainer = styled.ScrollView`
  paddingVertical: 5;
  marginVertical: 5;
`;

const Categories = ({ categoryItems }: PropsCategories) => {
  return (
	<CategoriesContainer horizontal>
		{categoryItems.map((category) => <CategoryItem {...category} />)}
	</CategoriesContainer>
  )
}

export default Categories;