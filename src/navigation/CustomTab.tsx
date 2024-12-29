import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { TabItem } from './styles';
import { COLORS } from '../constants';
import { TTabName } from '../types';

interface PropsCustomTab {
	name: TTabName;
	icon: string;
	isFocused: boolean;
	navigateToTab: (routeName: TTabName) => void;
}

const AnimatedIcon = Animated.createAnimatedComponent(Entypo);

const CustomTab = ({ name, icon, isFocused, navigateToTab }: PropsCustomTab) => {
	const translateY = useSharedValue<number>(0);
	const colorProgress = useSharedValue<number>(0);

	const tabItemStyles = useAnimatedStyle(() => ({
		transform: [{translateY: translateY.value}]
	}));

	const animatedIconStyles = useAnimatedStyle(() => ({
		color: interpolateColor(colorProgress.value, [0, 1], [COLORS.lightGray, COLORS.black])
	}));

	useEffect(() => {
		if(isFocused) {
			translateY.value = withSpring(-10);
			colorProgress.value = withSpring(1);
		} else {
			translateY.value = withSpring(0);
			colorProgress.value = withSpring(0);
		}
	}, [isFocused]);

	const onNavigate = () => {
		navigateToTab(name);
	};

	return (
		<TabItem
			onPress={onNavigate}
			style={tabItemStyles}
		>
			<AnimatedIcon 
				name={icon} 
				size={25} 
				style={animatedIconStyles}
			/>
			<Text>{name}</Text>
		</TabItem>
	)
}

export default CustomTab;
