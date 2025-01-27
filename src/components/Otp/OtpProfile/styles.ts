import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const OtpUserIconWrapper = styled(Animated.View)`
	marginBottom: 10;
`;

const OtpFormikInputWrapper = styled(Animated.View)`
	width: 100%;
	paddingHorizontal: 5%;
	marginBottom: 20;
`;

const OtpFormikInput = styled.TextInput`
	backgroundColor: ${COLORS.lightGray};
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.medium16};
	color: ${COLORS.black};
	borderRadius: 15;
	paddingVertical: 8;
	paddingHorizontal: 20;
`;

const OtpFormikErrorText = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.small14};
	color: ${COLORS.red};
	marginHorizontal: 20;
	marginTop: 5;
`;

export { OtpUserIconWrapper, OtpFormikInputWrapper, OtpFormikInput, OtpFormikErrorText };
