import React from 'react';
import styled from 'styled-components/native';

interface IImage {
  img: string, 
  width: number,
  height: number,
  borderRadius?: number
} 

const ImageStyle = styled.Image<IImage>`
  width: ${(props) => props.width === 100 ? `${props.width}%` : props.width};
  height: ${(props) => props.height};
  borderRadius: ${(props => props.borderRadius || 0)};
`;

const Image = (props: IImage) => {
  return (
		<>
			<ImageStyle {...props} source={{uri: props.img}} />
		</>
  )
}

export default Image;