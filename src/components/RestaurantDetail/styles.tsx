import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
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
	paddingVertical: 6;
	paddingHorizontal: 18;
	borderRadius: 10;
`;

const RestaurantIsOpenNow = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.white};
`;

const RestaurantInfoParams = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.small14};
	color: ${COLORS.black};
`;

const RestaurantPhoneButton = styled.TouchableOpacity`
	alignSelf: center;
	marginBottom: 5;
`;

const RestaurantPhoneText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
`;

const RestaurantOpeningHours = styled.View`
	paddingVertical: 10;
  paddingHorizontal: 15;
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
`;

const RestaurantOpeningHoursList = styled.View`
	width: 50%;
`;

const RestaurantOpeningHoursItem = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
`;

const RestaurantOpeningHoursDay = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium17};
	color: ${COLORS.black};
	marginRight: 15;
`;

const RestaurantOpeningHoursTime = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium17};
	color: ${COLORS.black};
`;

const RestaurantPhotoLoader = styled(Animated.View)`
	width: 100%;
	aspectRatio: 1.7;
	backgroundColor: ${COLORS.lightGray};
`;

const RestaurantTextsLoader = styled.View`
	paddingVertical: 10;
  paddingHorizontal: 15;
`;

const RestaurantNameLoader = styled(Animated.View)`
	width: 100%;
	height: 30;
	backgroundColor: ${COLORS.lightGray};
	marginBottom: 12
`;

const RestaurantInfoParamsLoader = styled(Animated.View)`
	width: 100%;
	height: 20;
	backgroundColor: ${COLORS.lightGray};
`;

const RestaurantLineLoader = styled(Animated.View)`
	width: 100%;
	height: 2;
	backgroundColor: ${COLORS.lightGray};
`;

const RestaurantOpeningHoursLoader = styled.View`
	paddingVertical: 10;
  paddingHorizontal: 15;
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
`;

const RestaurantOpeningHoursListLoader = styled.View`
	width: 50%;
`;

interface IRestaurantOpeningHoursItemLoaderStyle {
	marginBottom: number;
}

const RestaurantOpeningHoursItemLoaderStyle = styled.View<IRestaurantOpeningHoursItemLoaderStyle>`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	marginBottom: ${(props) => props.marginBottom};
`;

const RestaurantOpeningHoursDayLoader = styled(Animated.View)`
	width: 40;
	height: 17;
	backgroundColor: ${COLORS.lightGray};
	marginRight: 15;
`;

const RestaurantOpeningHoursTimeLoader = styled(Animated.View)`
	width: 100;
	height: 17;
	backgroundColor: ${COLORS.lightGray};
`;

const RestaurantPhoneButtonLoaderStyle = styled(Animated.View)`
	width: 120;
	height: 20;
	backgroundColor: ${COLORS.lightGray};
	alignSelf: center;
	marginBottom: 15;
`;

const RestaurantIsOpenNowWrapperLoaderStyle = styled(Animated.View)`
	backgroundColor: ${COLORS.lightGray};
	paddingVertical: 6;
	paddingHorizontal: 18;
	borderRadius: 10;
	width: 130;
	height: 42;
`;

const MenuItemsWrapper = styled.View`
	paddingBottom: 15;
	paddingHorizontal: 15;
`;

const MenuItemStyle = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	paddingVertical: 10;
`;

const MenuItemCheckboxWrapper = styled.View`
	width: 11%;
`;

const MenuItemTextsWrapper = styled.View`
	width: 65%;
`;

const MenuItemName = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
`;

const MenuItemPrice = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const MenuItemImageWrapper = styled.View`
	width: 24%;
`;

const MenuItemImage = styled.Image`
	width: 100%;
	aspectRatio: 1;
	borderRadius: 10;
`;

export { RestaurantTexts, RestaurantName, RestaurantIsOpenNowWrapper, RestaurantIsOpenNow, RestaurantInfoParams, RestaurantPhoneButton, RestaurantPhoneText, RestaurantOpeningHours, RestaurantOpeningHoursList, RestaurantOpeningHoursItem, RestaurantOpeningHoursDay, RestaurantOpeningHoursTime, RestaurantPhotoLoader, RestaurantTextsLoader, RestaurantNameLoader, RestaurantInfoParamsLoader, RestaurantLineLoader, RestaurantOpeningHoursLoader, RestaurantOpeningHoursListLoader, RestaurantOpeningHoursItemLoaderStyle, RestaurantOpeningHoursDayLoader, RestaurantOpeningHoursTimeLoader, RestaurantPhoneButtonLoaderStyle, RestaurantIsOpenNowWrapperLoaderStyle, MenuItemsWrapper, MenuItemStyle, MenuItemCheckboxWrapper, MenuItemTextsWrapper, MenuItemName, MenuItemPrice, MenuItemImageWrapper, MenuItemImage };
