import React from 'react';
import { Title } from '../importComponents';
import { COLORS, FONTS_SIZE, FONTS } from '../../constants';
import { HeaderTabsContainer, HeaderTab } from './styles';

interface PropsHeaderTabs {
  nameTabs: Array<string>;
	shippingMethod: string;
	setShippingMethod: (shippingMethod: string) => void;
}

const HeaderTabs = ({ nameTabs, shippingMethod, setShippingMethod }: PropsHeaderTabs) => {
  return (
		<HeaderTabsContainer>
			{nameTabs.map((nameTab, index) => 
				<HeaderTab 
					nameTab={nameTab} 
					activeTab={shippingMethod}
					onPress={() => setShippingMethod(nameTab)}
					activeOpacity={.7}
					key={`nameTab_${index}`}
				>
					<Title 
						color={shippingMethod === nameTab ? COLORS.white : COLORS.black} 
						fontSize={FONTS_SIZE.medium16} 
						fontFamily={FONTS.poppinsSemiBold}
					>
						{nameTab}
					</Title>
				</HeaderTab>
			)}
		</HeaderTabsContainer>
  )
}

export default HeaderTabs;
