import React, { useCallback } from 'react';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { TabsWrapper } from './styles';
import { ITab, TTabName } from '../types';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import CustomTab from './CustomTab';

interface PropsCustomTabs {
	state: TabNavigationState<ParamListBase>;
	navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
	tabsItems: Array<ITab>;
}

const CustomTabs = ({ state, navigation, tabsItems }: PropsCustomTabs) => {
	const navigateToTab = useCallback((routeName: TTabName): void => {
		navigation.navigate(routeName);
	}, []);

  return (
    <TabsWrapper>
      {tabsItems.map((tabItem, index) => 
				<CustomTab 
					name={tabItem.name}
					icon={tabItem.icon}
					isFocused={state.index === index}
					navigateToTab={navigateToTab}
					key={`tabItem_${index}`}
				/>
			)}
    </TabsWrapper>
  );
}

export default CustomTabs;
