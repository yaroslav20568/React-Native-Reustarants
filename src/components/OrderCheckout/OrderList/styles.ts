import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const Container = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	paddingVertical: 10;
`;

const TextsContainer = styled.View`
	width: 72%;
`;

const Name = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
`;

const Price = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const ImageContainer = styled.View`
	width: 24%;
`;

const Image = styled.Image`
	width: 100%;
	aspectRatio: 1;
	borderRadius: 10;
`;

export { Container, TextsContainer, Name, Price, ImageContainer, Image };
