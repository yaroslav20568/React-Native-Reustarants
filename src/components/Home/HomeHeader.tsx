import React from 'react';
import { BurgerMenu, SearchPlacesInput, AccountPhoto } from '../importComponents';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  paddingTop: 30;
  paddingBottom: 15;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
`;

function Header() {
  return (
    <HeaderContainer>
      <BurgerMenu />
	  <SearchPlacesInput />
	  <AccountPhoto />
    </HeaderContainer>
  );
}

export default Header;
