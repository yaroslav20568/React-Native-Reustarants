import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '../../constants';

const BurgerContainer = styled.View`
  width: 20;
  height: 14;
  justifyContent: space-between;
`;

const BurgerItem = styled.View`
  width: 100%;
  height: 2;
  backgroundColor: ${COLORS.black};
`;

const BurgerMenu = () => {
  return (
    <BurgerContainer>
	  <BurgerItem />
	  <BurgerItem />
	  <BurgerItem />
    </BurgerContainer>
  );
};

export default BurgerMenu;
