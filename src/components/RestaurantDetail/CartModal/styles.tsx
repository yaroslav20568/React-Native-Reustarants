import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const CartModalWrapper = styled(Animated.View)`
	position: absolute;
	width: 100%;
	height: 100%;
	zIndex: 100;
`;

const OutsideContainer = styled.TouchableOpacity`
	position: absolute;
	z-index: 100;
	bottom: 50%;
	width: 100%;
	height: 50%;
	paddingHorizontal: 5;
	paddingVertical: 10;
	backgroundColor: rgba(0, 0, 0, 0.5);
`;

const Container = styled.View`
	position: absolute;
	z-index: 100;
	top: 50%;
	width: 100%;
	height: 50%;
	paddingHorizontal: 10;
	paddingVertical: 15;
	backgroundColor: ${COLORS.white};
`;

const RestaurantName = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
	marginBottom: 10;
	textAlign: center;
`;

const SubtotalWrapper = styled.View`
	paddingHorizontal: 10;
	paddingVertical: 20;
	flex-direction: row;
	justify-content: space-between;
`;

const SubtotalText = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

export { CartModalWrapper, OutsideContainer, Container, RestaurantName, SubtotalWrapper, SubtotalText };
