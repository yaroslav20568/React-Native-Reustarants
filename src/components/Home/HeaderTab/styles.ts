import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { FONTS_SIZE, FONTS } from '../../../constants';

const Tab = styled.TouchableOpacity`
	width: 96;
	alignItems: center;
	paddingVertical: 5;
	borderRadius: 20;
`;

const Name = styled(Animated.Text)`
	fontSize: ${FONTS_SIZE.medium16};
	fontFamily: ${FONTS.poppinsSemiBold};
`;

export { Tab, Name };
