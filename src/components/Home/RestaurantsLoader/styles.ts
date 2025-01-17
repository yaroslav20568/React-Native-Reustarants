import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { COLORS } from '../../../constants';

interface IRestaurantLoaderStyle {
	marginBottom: number;
}

const RestaurantLoaderStyle = styled(Animated.View)<IRestaurantLoaderStyle>`
	width: 100%;
	aspectRatio: 1.5;
	backgroundColor: ${COLORS.lightGray};
	borderBottomLeftRadius: 10;
  borderBottomRightRadius: 10;
	marginBottom: ${(props) => props.marginBottom};
`;

export { RestaurantLoaderStyle };
