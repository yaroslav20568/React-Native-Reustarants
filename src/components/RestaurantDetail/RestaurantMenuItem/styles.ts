import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const MenuItem = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	paddingVertical: 10;
`;

const MenuItemLeftWrapper = styled.View`
	flexDirection: row;
	alignItems: center;
	width: 72%;
`;

const MenuItemTextsWrapper = styled.View`
	// width: 65%;
	// backgroundColor: blue;
	flex: 1;
`;

const MenuItemName = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
`;

const MenuItemPrice = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const MenuItemImageWrapper = styled.View`
	width: 24%;
`;

const MenuItemImage = styled.Image`
	width: 100%;
	aspectRatio: 1;
	borderRadius: 10;
`;

export { MenuItem, MenuItemLeftWrapper, MenuItemTextsWrapper, MenuItemName, MenuItemPrice, MenuItemImageWrapper, MenuItemImage };
