import React from 'react';
import styled from 'styled-components/native';
import { FONTS, COLORS, FONTS_SIZE } from '../../constants';

interface ITitle {
  fontFamily?: string,
  fontSize?: number,
  color?: string,
  marginTop?: number,
  marginBottom?: number,
  children: string
}

const TitleStyle = styled.Text<ITitle>`
  font-family: ${(props) => props.fontFamily || FONTS.poppinsMedium};
  font-size: ${(props) => props.fontSize || FONTS_SIZE.small14};
  color: ${(props) => props.color || COLORS.black};
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

const Title = (props: ITitle) => {
  return (
    <>
      <TitleStyle {...props}>{props.children}</TitleStyle>
    </>
  );
};

export default Title;
