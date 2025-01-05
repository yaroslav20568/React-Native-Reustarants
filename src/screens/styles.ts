import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const ScreenContainer = styled.ScrollView`
  paddingHorizontal: 15;
`;

const CartModalWrapper = styled(Animated.View)`
	position: absolute;
	width: 100%;
	height: 100%;
	zIndex: 100;
`;

const CartModalButtonWrapper = styled.View`
	position: absolute;
	z-index: 10;
	bottom: 60;
	width: 70%;
	alignSelf: center;
`;

export { ScreenContainer, CartModalWrapper, CartModalButtonWrapper };
