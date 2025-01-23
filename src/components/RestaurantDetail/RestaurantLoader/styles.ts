import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { COLORS } from '../../../constants';

const PhotoLoader = styled(Animated.View)`
	width: 100%;
	aspectRatio: 1.7;
	backgroundColor: ${COLORS.lightGray};
`;

const TextsLoader = styled.View`
	paddingVertical: 10;
  paddingHorizontal: 15;
`;

const NameLoader = styled(Animated.View)`
	width: 100%;
	height: 30;
	backgroundColor: ${COLORS.lightGray};
	marginBottom: 12
`;

const InfoParamsLoader = styled(Animated.View)`
	width: 100%;
	height: 20;
	backgroundColor: ${COLORS.lightGray};
`;

const LineLoader = styled(Animated.View)`
	width: 100%;
	height: 2;
	backgroundColor: ${COLORS.lightGray};
`;

const OpeningHoursLoader = styled.View`
	paddingVertical: 10;
  paddingHorizontal: 15;
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
`;

const OpeningHoursListLoader = styled.View`
	width: 50%;
`;

interface IOpeningHoursItemLoader {
	marginBottom: number;
}

const OpeningHoursItemLoader = styled.View<IOpeningHoursItemLoader>`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	marginBottom: ${(props) => props.marginBottom};
`;

const OpeningHoursDayLoader = styled(Animated.View)`
	width: 40;
	height: 17;
	backgroundColor: ${COLORS.lightGray};
	marginRight: 15;
`;

const OpeningHoursTimeLoader = styled(Animated.View)`
	width: 100;
	height: 17;
	backgroundColor: ${COLORS.lightGray};
`;

const PhoneButtonLoader = styled(Animated.View)`
	width: 120;
	height: 20;
	backgroundColor: ${COLORS.lightGray};
	alignSelf: center;
	marginBottom: 15;
`;

const IsOpenNowWrapperLoader = styled(Animated.View)`
	backgroundColor: ${COLORS.lightGray};
	paddingVertical: 6;
	paddingHorizontal: 18;
	borderRadius: 10;
	width: 130;
	height: 42;
`;

export { PhotoLoader, TextsLoader, NameLoader, InfoParamsLoader, LineLoader, OpeningHoursLoader, OpeningHoursListLoader, OpeningHoursItemLoader, OpeningHoursDayLoader, OpeningHoursTimeLoader, PhoneButtonLoader, IsOpenNowWrapperLoader };
