import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const CartModalButtonWrapper = styled.View`
	position: absolute;
	z-index: 10;
	bottom: 5;
	width: 70%;
	alignSelf: center;
`;

const ViewCartWrapper = styled.View`
	paddingHorizontal: 30;
`;

const Container = styled.TouchableOpacity`
	height: 45;
	backgroundColor: ${COLORS.black};
	borderRadius: 40;
	flexDirection: row;
	alignItems: center;
	justifyContent: center;
`;

const ButtonText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium16};
	color: ${COLORS.white};
	textTransform: capitalize;
	marginRight: 10;
`;

const ButtonPrice = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.white};
`;

export { CartModalButtonWrapper, ViewCartWrapper, Container, ButtonText, ButtonPrice };
