import React from 'react';
import styled from 'styled-components/native';

interface Title {
  fontFamily: string,
  fontSize: number,
  color: string,
  children: string,
}

const TitleStyle = styled.Text<Title>`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

const Title = (props: Title) => {
  return (
    <>
      <TitleStyle {...props}>{props.children}</TitleStyle>
    </>
  );
};

export default Title;
