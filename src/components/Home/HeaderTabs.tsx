import React from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { HeaderTabsContainer, HeaderTabToddler } from './styles';
import { HeaderTab } from '../importComponents';

interface PropsHeaderTabs {
  nameTabs: Array<string>;
	shippingMethod: string;
	setShippingMethod: (shippingMethod: string) => void;
}

const HeaderTabs = ({ nameTabs, shippingMethod, setShippingMethod }: PropsHeaderTabs) => {
	const translateX = useSharedValue<number>(0);

	const headerTabToddlerStyles = useAnimatedStyle(() => ({
		transform: [{translateX: translateX.value}]
	}));

	const onSelectTab = (nameTab: string, index: number): void => {
		setShippingMethod(nameTab);
		translateX.value = withTiming(index * 96);
	};

  return (
		<HeaderTabsContainer>
			<HeaderTabToddler 
				style={headerTabToddlerStyles} 
			/>
			{nameTabs.map((nameTab, index) => 
				<HeaderTab 
					nameTab={nameTab}
					shippingMethod={shippingMethod}
					index={index}
					onSelectTab={onSelectTab}
					key={`nameTab_${index}`}
				/>
			)}
		</HeaderTabsContainer>
  )
}

export default HeaderTabs;
