import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const CartModalItem = styled.View`
	flex-direction: row;
	justify-content: space-between;
	paddingHorizontal: 20;
	paddingVertical: 20;
`;

const CartModalItemText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

export { CartModalItem, CartModalItemText };
