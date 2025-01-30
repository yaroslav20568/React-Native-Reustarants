import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const ResendButton = styled(AnimatedTouchable)`
	marginBottom: 15;
`;

const ResendButtonText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
	textDecorationLine: underline;
`;

export { ResendButton, ResendButtonText };
