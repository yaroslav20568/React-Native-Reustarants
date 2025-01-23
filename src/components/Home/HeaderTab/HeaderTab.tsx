import React, { useEffect } from 'react';
import { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS } from '../../../constants';
import { Tab, Name } from './styles';

interface PropsHeaderTab {
  nameTab: string;
	shippingMethod: string;
	index: number;
	onSelectTab: (nameTab: string, index: number) => void;
}

const HeaderTab = ({ nameTab, shippingMethod, index, onSelectTab }: PropsHeaderTab) => {
	const colorProgress = useSharedValue<number>(1);

	const nameStyles = useAnimatedStyle(() => ({
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
		<Tab 
			onPress={onPress}
			activeOpacity={.7}
		>
			<Name 
				style={nameStyles}
			>
				{nameTab}
			</Name>
		</Tab>
	)
}

export default HeaderTab;
