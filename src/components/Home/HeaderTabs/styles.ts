import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { COLORS } from '../../../constants';

const Tabs = styled.View`
	flexDirection: row;
	justifyContent: center;
	width: 182;
	margin: 0 auto;
	marginTop: 30;
	marginBottom: 15;
`;

const TabsToddler = styled(Animated.View)`
	width: 96;
	height: 38;
	backgroundColor: ${COLORS.black};
	position: absolute;
	zIndex: 0;
	top: 0;
	left: -5;
	borderRadius: 20;
`;

export { Tabs, TabsToddler };
