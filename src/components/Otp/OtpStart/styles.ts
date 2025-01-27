import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const OtpContainer = styled.View`
	flex: 1;
	alignItems: center;
	justifyContent: center;
	marginVertical: 30;
`;

const OtpTitle = styled(Animated.Text)`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.large24};
	color: ${COLORS.black};
	textAlign: center;
	textTransform: capitalize;
`;

const OtpText = styled(Animated.Text)`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.medium16};
	color: ${COLORS.black};
	textAlign: center;
	marginBottom: 15;
`;

const OtpButton = styled(AnimatedTouchable)`
	width: 70%;
	backgroundColor: ${COLORS.lightBlue};
	paddingVertical: 7;
	borderRadius: 20;
	marginTop: 25;
	justifyContent: center;
	alignItems: center;
`;

const OtpButtonText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium17};
	color: ${COLORS.white};
	textAlign: center;
	textTransform: capitalize;
`;

const PhoneInputWrapper = styled(Animated.View)`
	marginBottom: 20;
	flexDirection: row;
	alignItems: center;
`;

const CurrentCountryCodeButton = styled.TouchableOpacity`
	borderBottomWidth: 1;
	marginRight: 10;
	width: 84;
	paddingHorizontal: 5;
	paddingVertical: 2.7;
`;

const CurrentCountryCodeWrapper = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: center;
`;

const CurrentCountryFlag = styled.Image`
	width: 32;
	aspectRatio: 1.5;
	marginRight: 5;
`;

const CurrentCountryCode = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.medium16};
	color: ${COLORS.black};
`;

interface IPhoneInput {
	borderColor: string;
}

const PhoneInput = styled.TextInput<IPhoneInput>`
	width: 160;
	borderBottomWidth: 1;
	paddingVertical: 2.1;
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.medium16};
	paddingHorizontal: 6;
	borderColor: ${(props) => props.borderColor};
`;

const CountriesModalInner = styled.View`
	flex: 1;
	paddingTop: 10;
	backgroundColor: ${COLORS.lightGray};
	paddingHorizontal: 15;
`;

const CountriesModalHeader = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
`;

const CountriesModalHeaderText = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium20};
	color: ${COLORS.black};
`;

const CountryButton = styled.TouchableOpacity`
	flexDirection: row;
	alignItems: center;
	paddingVertical: 10;
`;

const CountryName = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium16};
	color: ${COLORS.black};
	flex: 1;
	marginLeft: 5;
`;

export { OtpContainer, OtpTitle, OtpText, OtpButton, OtpButtonText, PhoneInputWrapper, CurrentCountryCodeButton, CurrentCountryCodeWrapper, CurrentCountryFlag, CurrentCountryCode, PhoneInput, CountriesModalInner, CountriesModalHeader, CountriesModalHeaderText, CountryButton, CountryName };
