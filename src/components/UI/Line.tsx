import React from 'react';
import styled from 'styled-components/native';

interface ILine {
  width: number,
  height: number,
  backgroundColor: string
}

const LineContainer = styled.View<ILine>`
  width: ${(props) => props.width === 100 ? `${props.width}%` : props.width};
  height: ${(props) => props.height};
  backgroundColor: ${(props) => props.backgroundColor};
`;

const Line = (props: ILine) => {
  return (
	<LineContainer {...props} />
  )
}

export default Line;