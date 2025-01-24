import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS } from '../../../constants';

const MenuItemsWrapperLoader = styled.View`
	paddingBottom: 15;
	paddingHorizontal: 15;
`;

const MenuItemLoaderStyle = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	paddingVertical: 10;
`;

const MenuItemCheckboxWrapperLoader = styled.View`
	width: 11%;
`;

const MenuItemCheckboxLoader = styled(Animated.View)`
	width: 25;
	height: 25;
	backgroundColor: ${COLORS.lightGray};
`;

const MenuItemTextsWrapperLoader = styled.View`
	width: 65%;
`;

const MenuItemNameLoader = styled(Animated.View)`
	width: 80%;
	height: 20;
	backgroundColor: ${COLORS.lightGray};
	marginBottom: 10;
`;

const MenuItemPriceLoader = styled(Animated.View)`
	width: 50;
	height: 20;
	backgroundColor: ${COLORS.lightGray};
`;

const MenuItemImageWrapperLoader = styled.View`
	width: 24%;
`;

const MenuItemImageLoader = styled(Animated.View)`
	width: 100%;
	aspectRatio: 1;
	borderRadius: 10;
	backgroundColor: ${COLORS.lightGray};
`;

const MenuItemLineLoader = styled(Animated.View)`
	width: 100%;
	height: 2;
	backgroundColor: ${COLORS.lightGray};
`;

export { MenuItemsWrapperLoader, MenuItemLoaderStyle, MenuItemCheckboxWrapperLoader, MenuItemCheckboxLoader, MenuItemTextsWrapperLoader, MenuItemNameLoader, MenuItemPriceLoader, MenuItemImageWrapperLoader, MenuItemImageLoader, MenuItemLineLoader };
