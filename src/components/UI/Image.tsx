import React from 'react';
import styled from 'styled-components/native';

interface IImage {
	img: object, 
	width: number,
	height: number
} 

const ImageStyle = styled.Image<IImage>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Image = (props: IImage) => {
  return (
	<>
		<ImageStyle {...props} source={props.img} />
	</>
  )
}

export default Image;