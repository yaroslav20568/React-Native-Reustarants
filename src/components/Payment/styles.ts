import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FONTS, FONTS_SIZE, COLORS } from '../../constants';
import Animated from 'react-native-reanimated';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const PriceWrapper = styled.View`
	flexDirection: row;
	alignItems: center;
	marginBottom: 5;
`;

const PriceTitle = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.medium18};
  color: ${COLORS.black};
`;

const PriceValue = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.large28};
  color: ${COLORS.lightBlue};
`;

const Button = styled(AnimatedTouchable)`
	backgroundColor: blue;
	paddingVertical: 10;
	marginTop: 20;
`;

const ButtonText = styled.Text`
	textAlign: center;
	color: white;
`;

export { PriceWrapper, PriceTitle, PriceValue, Button, ButtonText };
