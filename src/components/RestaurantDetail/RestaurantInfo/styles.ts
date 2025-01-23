import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const Texts = styled.View`
  paddingVertical: 10;
  paddingHorizontal: 15;
`;

const Name = styled.Text`
	fontSize: 24;
	fontFamily: ${FONTS.poppinsSemiBold};
  color: ${COLORS.black};
`;

interface IIsOpenNowWrapper {
	isOpenNow: boolean | undefined;
}

const IsOpenNowWrapper = styled.View<IIsOpenNowWrapper>`
	backgroundColor: ${(props) => props.isOpenNow ? COLORS.green : COLORS.red};
	paddingVertical: 6;
	paddingHorizontal: 18;
	borderRadius: 10;
`;

const IsOpenNow = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.white};
`;

const InfoParams = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.small14};
	color: ${COLORS.black};
`;

const PhoneButton = styled.TouchableOpacity`
	alignSelf: center;
	marginBottom: 5;
`;

const PhoneText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
`;

const OpeningHours = styled.View`
	paddingVertical: 10;
  paddingHorizontal: 15;
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
`;

const OpeningHoursList = styled.View`
	width: 50%;
`;

const OpeningHoursItem = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
`;

const OpeningHoursDay = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium17};
	color: ${COLORS.black};
	marginRight: 15;
`;

const OpeningHoursTime = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium17};
	color: ${COLORS.black};
`;

export { Texts, Name, IsOpenNowWrapper, IsOpenNow, InfoParams, PhoneButton, PhoneText, OpeningHours, OpeningHoursList, OpeningHoursItem, OpeningHoursDay, OpeningHoursTime };
