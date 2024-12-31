import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../constants';

const RestaurantTexts = styled.View`
  paddingVertical: 10;
  paddingHorizontal: 15;
`;

const RestaurantName = styled.Text`
	fontSize: 24;
	fontFamily: ${FONTS.poppinsSemiBold};
  color: ${COLORS.black};
`;

interface IRestaurantIsOpenNowWrapper {
	isOpenNow: boolean | undefined;
}

const RestaurantIsOpenNowWrapper = styled.View<IRestaurantIsOpenNowWrapper>`
	backgroundColor: ${(props) => props.isOpenNow ? COLORS.green : COLORS.red};
	paddingVertical: 4;
	paddingHorizontal: 12;
	borderRadius: 10;
	position: absolute;
	right: 15;
	bottom: 15;
`;

const RestaurantIsOpenNow = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.small14};
	color: ${COLORS.white};
`;

const RestaurantInfoParams = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.small14};
	color: ${COLORS.black};
`;

export { RestaurantTexts, RestaurantName, RestaurantIsOpenNowWrapper, RestaurantIsOpenNow, RestaurantInfoParams };
