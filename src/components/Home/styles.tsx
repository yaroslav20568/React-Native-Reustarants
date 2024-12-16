import styled from "styled-components/native";
import { COLORS } from "../../constants";
import { FlatList } from "react-native";

interface IHeaderTab {
	nameTab: string,
	activeTab: string,
	onPress: () => void
}

const HeaderTabsContainer = styled.View`
	flexDirection: row;
	justify-content: center;
	marginTop: 30;
	marginBottom: 15;
`;

const HeaderTab = styled.TouchableOpacity<IHeaderTab>`
	backgroundColor: ${(props) => props.activeTab === props.nameTab ? COLORS.black : 'rgba(255, 255, 255, 0)'};
	paddingVertical: 5;
	paddingHorizontal: 15;
	borderRadius: 20;
`;

const WrapperLocationIcon = styled.View`
	position: absolute;
	top: 12;
	left: 10;
	zIndex: 1;
`;

const WrapperClear = styled.View`
	position: absolute;
	top: 11;
	right: 15;
	flexDirection: row;
	alignItems: center;
`;

const WrapperClearIcon = styled.TouchableOpacity`
	marginRight: 8;
	backgroundColor: #999;
	paddingVertical: 2;
	paddingHorizontal: 2;
	borderRadius: 15;
`;

const WrapperTimerIcon = styled.View`
	flexDirection: row;
	backgroundColor: ${COLORS.white};
	paddingVertical: 4;
	paddingHorizontal: 8;
	borderRadius: 15;
`;

const CategoriesContainer = (styled.FlatList`
  paddingVertical: 5;
  marginVertical: 5;
` as unknown) as typeof FlatList;

const CategoryItemContainer = styled.TouchableOpacity`
  alignItems: center;
`;

const RestaurantItemContainer = styled.TouchableOpacity`
  marginBottom: 20;
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

const RestaurantRating = styled.View`
  backgroundColor: ${COLORS.lightGray};
  alignItems: center;
  justifyContent: center;
  width: 35;
  height: 35;
  borderRadius: 100;
`;

export { HeaderTabsContainer, HeaderTab, WrapperLocationIcon, WrapperClear, WrapperClearIcon, WrapperTimerIcon, CategoriesContainer, CategoryItemContainer, RestaurantItemContainer, RestaurantInfo, RestaurantRating };
