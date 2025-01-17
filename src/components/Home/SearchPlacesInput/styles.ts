import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS, FONTS } from '../../../constants';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const LocationIconWrapper = styled.View`
	position: absolute;
	top: 12;
	left: 10;
	zIndex: 1;
`;

const ClearWrapper = styled.View`
	position: absolute;
	top: 10;
	right: 15;
	flexDirection: row;
	alignItems: center;
`;

const ClearIconWrapper = styled(AnimatedTouchable)`
	marginRight: 8;
	backgroundColor: #999;
	paddingVertical: 2;
	paddingHorizontal: 2;
	borderRadius: 15;
`;

const TimerIconWrapper = styled.View`
	flexDirection: row;
	backgroundColor: ${COLORS.white};
	paddingVertical: 4;
	paddingHorizontal: 8;
	borderRadius: 15;
`;

const TimerIconText = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	marginLeft: 5;
`;

export { LocationIconWrapper, ClearWrapper, ClearIconWrapper, TimerIconWrapper, TimerIconText };
