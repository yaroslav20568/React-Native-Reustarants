import React, { useCallback } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Tabs, TabsToddler } from './styles';
import { HeaderTab } from '../../importComponents';

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

	const onSelectTab = useCallback((nameTab: string, index: number): void => {
		setShippingMethod(nameTab);
		translateX.value = withTiming(index * 96);
	}, []);

  return (
		<Tabs>
			<TabsToddler 
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
		</Tabs>
  )
}

export default HeaderTabs;
