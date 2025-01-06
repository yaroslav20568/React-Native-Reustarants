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

const RestaurantMenuItemsWrapper = styled.View`
	paddingBottom: 15;
	paddingHorizontal: 15;
`;

const RestaurantMenuItemStyle = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	paddingVertical: 10;
`;

const RestaurantMenuItemCheckboxWrapper = styled.View`
	width: 11%;
`;

const RestaurantMenuItemTextsWrapper = styled.View`
	width: 65%;
`;

const RestaurantMenuItemName = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
`;

const RestaurantMenuItemPrice = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const RestaurantMenuItemImageWrapper = styled.View`
	width: 24%;
`;

const RestaurantMenuItemImage = styled.Image`
	width: 100%;
	aspectRatio: 1;
	borderRadius: 10;
`;

const RestaurantMenuItemsWrapperLoader = styled.View`
	paddingBottom: 15;
	paddingHorizontal: 15;
`;

const RestaurantMenuItemLoaderStyle = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	paddingVertical: 10;
`;

const RestaurantMenuItemCheckboxWrapperLoader = styled.View`
	width: 11%;
`;

const RestaurantMenuItemCheckboxLoader = styled(Animated.View)`
	width: 25;
	height: 25;
	backgroundColor: ${COLORS.lightGray};
`;

const RestaurantMenuItemTextsWrapperLoader = styled.View`
	width: 65%;
`;

const RestaurantMenuItemNameLoader = styled(Animated.View)`
	width: 80%;
	height: 20;
	backgroundColor: ${COLORS.lightGray};
	marginBottom: 10;
`;

const RestaurantMenuItemPriceLoader = styled(Animated.View)`
	width: 50;
	height: 20;
	backgroundColor: ${COLORS.lightGray};
`;

const RestaurantMenuItemImageWrapperLoader = styled.View`
	width: 24%;
`;

const RestaurantMenuItemImageLoader = styled(Animated.View)`
	width: 100%;
	aspectRatio: 1;
	borderRadius: 10;
	backgroundColor: ${COLORS.lightGray};
`;

const RestaurantMenuItemLineLoader = styled(Animated.View)`
	width: 100%;
	height: 2;
	backgroundColor: ${COLORS.lightGray};
`;

const CartModalOutside = styled.TouchableOpacity`
	position: absolute;
	z-index: 100;
	bottom: 50%;
	width: 100%;
	height: 50%;
	paddingHorizontal: 5;
	paddingVertical: 10;
	backgroundColor: rgba(0, 0, 0, 0.5);
`;

const CartModalWrapper = styled(Animated.View)`
	position: absolute;
	width: 100%;
	height: 100%;
	zIndex: 100;
`;

const CartModalStyle = styled.View`
	position: absolute;
	z-index: 100;
	top: 50%;
	width: 100%;
	height: 50%;
	paddingHorizontal: 10;
	paddingVertical: 15;
	backgroundColor: ${COLORS.white};
`;

const CartModalRestaurantName = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
	fontSize: ${FONTS_SIZE.medium18};
	color: ${COLORS.black};
	marginBottom: 10;
	textAlign: center;
`;

const CartModalItem = styled.View`
	flex-direction: row;
	justify-content: space-between;
	paddingHorizontal: 20;
	paddingVertical: 20;
`;

const CartModalItemText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const CartModalSubtotalWrapper = styled.View`
	paddingHorizontal: 10;
	paddingVertical: 20;
	flex-direction: row;
	justify-content: space-between;
`;

const CartModalSubtotalText = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const ViewCartWrapper = styled.View`
	paddingHorizontal: 30;
`;

const CartModalButtonWrapper = styled.View`
	position: absolute;
	z-index: 10;
	bottom: 20;
	width: 70%;
	alignSelf: center;
`;

const CartModalButtonStyle = styled.TouchableOpacity`
	height: 45;
	backgroundColor: ${COLORS.black};
	borderRadius: 40;
	flexDirection: row;
	alignItems: center;
	justifyContent: center;
`;

const CartModalButtonText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
	fontSize: ${FONTS_SIZE.medium16};
	color: ${COLORS.white};
	textTransform: capitalize;
	marginRight: 10;
`;

const CartModalButtonPriceWrapper = styled.View`
	position: absolute;
	right: 20;
`;

const CartModalButtonPrice = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.white};
`;

export { RestaurantTexts, RestaurantName, RestaurantIsOpenNowWrapper, RestaurantIsOpenNow, RestaurantInfoParams, RestaurantPhoneButton, RestaurantPhoneText, RestaurantOpeningHours, RestaurantOpeningHoursList, RestaurantOpeningHoursItem, RestaurantOpeningHoursDay, RestaurantOpeningHoursTime, RestaurantPhotoLoader, RestaurantTextsLoader, RestaurantNameLoader, RestaurantInfoParamsLoader, RestaurantLineLoader, RestaurantOpeningHoursLoader, RestaurantOpeningHoursListLoader, RestaurantOpeningHoursItemLoaderStyle, RestaurantOpeningHoursDayLoader, RestaurantOpeningHoursTimeLoader, RestaurantPhoneButtonLoaderStyle, RestaurantIsOpenNowWrapperLoaderStyle, RestaurantMenuItemsWrapper, RestaurantMenuItemStyle, RestaurantMenuItemCheckboxWrapper, RestaurantMenuItemTextsWrapper, RestaurantMenuItemName, RestaurantMenuItemPrice, RestaurantMenuItemImageWrapper, RestaurantMenuItemImage, RestaurantMenuItemsWrapperLoader, RestaurantMenuItemLoaderStyle, RestaurantMenuItemCheckboxWrapperLoader, RestaurantMenuItemCheckboxLoader, RestaurantMenuItemTextsWrapperLoader, RestaurantMenuItemNameLoader, RestaurantMenuItemPriceLoader, RestaurantMenuItemImageWrapperLoader, RestaurantMenuItemImageLoader, RestaurantMenuItemLineLoader, CartModalOutside, CartModalStyle, CartModalWrapper, CartModalRestaurantName, CartModalItem, CartModalItemText, CartModalSubtotalWrapper, CartModalSubtotalText, ViewCartWrapper, CartModalButtonWrapper, CartModalButtonStyle, CartModalButtonText, CartModalButtonPriceWrapper, CartModalButtonPrice };
