import React from 'react';
import { CategoryItem } from '../importComponents';
import { ICategory } from '../../types';
import { CategoriesContainer, FlatListSeparator } from './styles';

interface PropsCategories {
  shippingTypeItems: Array<ICategory>;
}

const Categories = ({ shippingTypeItems }: PropsCategories) => {
	const ItemSeparatorComponent = (): JSX.Element => {
		return (
			<FlatListSeparator width={28} />
		);
	};

  return (
		<CategoriesContainer 
			data={shippingTypeItems}
			renderItem={({item}) => <CategoryItem {...item} />}
			horizontal
			showsHorizontalScrollIndicator={false}
			ItemSeparatorComponent={ItemSeparatorComponent}
			keyExtractor={(_, index) => `categoryItem_${index}`}
		/>
  )
}

export default Categories;