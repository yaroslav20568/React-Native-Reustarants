import React, { useEffect } from 'react';
import { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS } from '../../constants';
import { HeaderTabStyle, HeaderTabText } from './styles';

interface PropsHeaderTab {
  nameTab: string;
	shippingMethod: string;
	index: number;
	onSelectTab: (nameTab: string, index: number) => void;
}

const HeaderTab = ({ nameTab, shippingMethod, index, onSelectTab }: PropsHeaderTab) => {
	const colorProgress = useSharedValue<number>(1);

	const headerTabTextStyles = useAnimatedStyle(() => ({
		color: interpolateColor(colorProgress.value, [0, 1], [COLORS.white, COLORS.black])
	}));

	useEffect(() => {
		if(shippingMethod === nameTab) {
			colorProgress.value = withTiming(0, {duration: 700});
		} else {
			colorProgress.value = withTiming(1, {duration: 700});
		}
	}, [shippingMethod]);

	const onPress = (): void => {
		onSelectTab(nameTab, index);
	};

	return (
		<HeaderTabStyle 
			onPress={onPress}
			activeOpacity={.7}
		>
			<HeaderTabText 
				style={headerTabTextStyles}
			>
				{nameTab}
			</HeaderTabText>
		</HeaderTabStyle>
	)
}

export default HeaderTab;
