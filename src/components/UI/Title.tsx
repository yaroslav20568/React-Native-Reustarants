import React from 'react';
import styled from 'styled-components/native';
import { FONTS, COLORS, FONTS_SIZE } from '../../constants';

interface ITitle {
  fontFamily?: string,
  fontSize?: number,
  color?: string,
  marginTop?: number,
  marginBottom?: number,
  children: string | number
}

const TitleStyle = styled.Text<ITitle>`
  fontFamily: ${(props) => props.fontFamily || FONTS.poppinsMedium};
  fontSize: ${(props) => props.fontSize || FONTS_SIZE.small14};
  color: ${(props) => props.color || COLORS.black};
  marginTop: ${(props) => props.marginTop || 0};
  marginBottom: ${(props) => props.marginBottom || 0};
`;

const Title = (props: ITitle) => {
  return (
    <>
      <TitleStyle {...props}>{props.children}</TitleStyle>
    </>
  );
};

export default Title;
