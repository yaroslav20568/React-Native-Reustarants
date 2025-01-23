import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const Container = styled.TouchableOpacity`
  alignItems: center;
`;

const Image = styled.Image`
  width: 50;
	height: 40;
`;

const Name = styled.Text`
  fontFamily: ${FONTS.poppinsSemiBold};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

export { Container, Image, Name };
