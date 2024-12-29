import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS } from '../constants';

const animatedPressable = Animated.createAnimatedComponent(Pressable);

const TabsWrapper = styled.View`
	flexDirection: row;
	backgroundColor: ${COLORS.white};
`;

const TabItem = styled(animatedPressable)`
	width: 25%;
	alignItems: center;
	paddingVertical: 10;
	backgroundColor: ${COLORS.white};
	borderRadius: 20;
`;

export { TabsWrapper, TabItem };
