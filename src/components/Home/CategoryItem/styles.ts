import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const CategoryContainer = styled.TouchableOpacity`
  alignItems: center;
`;

const CategoryImage = styled.Image`
  width: 50;
	height: 40;
`;

const CategoryText = styled.Text`
  fontFamily: ${FONTS.poppinsSemiBold};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

export { CategoryContainer, CategoryImage, CategoryText };
