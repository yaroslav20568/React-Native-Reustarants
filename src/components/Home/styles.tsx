import { FlatList, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { COLORS, FONTS, FONTS_SIZE } from "../../constants";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const HeaderTabsContainer = styled.View`
	flexDirection: row;
	justify-content: center;
	width: 182;
	margin: 0 auto;
	marginTop: 30;
	marginBottom: 15;
`;

const HeaderTabToddler = styled(Animated.View)`
	width: 96;
	height: 38;
	backgroundColor: ${COLORS.black};
	position: absolute;
	z-index: 0;
	top: 0;
	left: -5;
	borderRadius: 20;
`;

const HeaderTabStyle = styled.TouchableOpacity`
	width: 96;
	alignItems: center;
	// backgroundColor: red;
	paddingVertical: 5;
	// paddingHorizontal: 15;
	borderRadius: 20;
`;

const HeaderTabText = styled(Animated.Text)`
	fontSize: ${FONTS_SIZE.medium16};
	fontFamily: ${FONTS.poppinsSemiBold};
`;

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
	marginLeft: 5;
`;

const CategoriesContainer = (styled.FlatList`
  paddingVertical: 5;
  marginVertical: 5;
` as unknown) as typeof FlatList;

const CategoryItemContainer = styled.TouchableOpacity`
  alignItems: center;
`;

const CategoryItemImage = styled.Image`
  width: 50;
	height: 40;
`;

const CategoryItemText = styled.Text`
  fontFamily: ${FONTS.poppinsSemiBold};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

interface IFlatListSeparator {
	width?: number;
	height?: number;
}

const FlatListSeparator = styled.View<IFlatListSeparator>`
  width: ${(props) => props.width || 0};
	height: ${(props) => props.height || 0};
`;

const RestaurantsContainer = styled.View`
	marginBottom: 30px;
`;

const RestaurantImage = styled.Image`
	width: 100%;
	aspectRatio: 1.8;
`;

const RestaurantInfo = styled.View`
  backgroundColor: ${COLORS.white};
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  paddingVertical: 5;
  paddingHorizontal: 10;
  borderBottomLeftRadius: 10;
  borderBottomRightRadius: 10;
`;

const RestaurantName = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
  fontSize: ${FONTS_SIZE.medium16};
  color: ${COLORS.black};
`;

const RestaurantPrice = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.mediumGray};
`;

const WrapperRestaurantRating = styled.View`
  backgroundColor: ${COLORS.lightGray};
  alignItems: center;
  justifyContent: center;
  width: 35;
  height: 35;
  borderRadius: 100;
`;

const RestaurantRating = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const RestaurantsEmptyText = styled.Text`
	fontSize: ${FONTS_SIZE.medium18};
`;

const RestaurantLoaderStyle = styled(Animated.View)`
	width: 100%;
	aspectRatio: 1.5;
	backgroundColor: ${COLORS.lightGray};
	borderBottomLeftRadius: 10;
  borderBottomRightRadius: 10;
	marginBottom: 20;
`;

export { HeaderTabsContainer, HeaderTabToddler, HeaderTabStyle, HeaderTabText, LocationIconWrapper, ClearWrapper, ClearIconWrapper, TimerIconWrapper, TimerIconText, CategoriesContainer, CategoryItemContainer, CategoryItemImage, CategoryItemText, FlatListSeparator, RestaurantsContainer, RestaurantImage, RestaurantInfo, RestaurantName, RestaurantPrice, WrapperRestaurantRating, RestaurantRating, RestaurantsEmptyText, RestaurantLoaderStyle };
