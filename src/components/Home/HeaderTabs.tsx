import React from 'react';
import styled from 'styled-components/native';
import { Title } from '../importComponents';
import { COLORS, FONTS_SIZE, FONTS } from '../../constants';
import { useActions, useAppSelector } from '../../redux/typedHooks';

interface PropsHeaderTabs {
  nameTabs: Array<string>
}

interface IHeaderTab {
  marginRight?: number,
  nameTab: string,
  activeTab: string,
  onPress: () => void
}

const HeaderTabsContainer = styled.View`
  flexDirection: row;
  justify-content: center;
  paddingVertical: 10;
`;

const HeaderTab = styled.TouchableOpacity<IHeaderTab>`
  backgroundColor: ${(props) => props.activeTab === props.nameTab ? COLORS.black : 'rgba(255, 255, 255, 0)'};
  paddingVertical: 5;
  paddingHorizontal: 15;
  borderRadius: 20;
  marginRight: ${(props) => props.marginRight};
`;

const HeaderTabs = ({ nameTabs }: PropsHeaderTabs) => {
  const shippingMethod = useAppSelector((state) => state.shippingMethod);
  const { setShippingMethod } = useActions();
  
  return (
	<HeaderTabsContainer>
	  {nameTabs.map((nameTab) => (
		<HeaderTab 
		  marginRight={10} 
		  nameTab={nameTab} 
		  activeTab={shippingMethod.name}
		  onPress={() => setShippingMethod(nameTab)}
		>
		  <Title 
            color={shippingMethod.name === nameTab ? COLORS.white : COLORS.black} 
            fontSize={FONTS_SIZE.medium16} 
            fontFamily={FONTS.poppinsSemiBold}
		  >
            {nameTab}
		  </Title>
	    </HeaderTab>
	  ))}
	</HeaderTabsContainer>
  )
}

export default HeaderTabs;