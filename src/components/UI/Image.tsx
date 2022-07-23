import React from 'react';
import styled from 'styled-components/native';

interface Image {
	img: object, 
	width: number,
	height: number
} 

const ImageStyle = styled.Image<Image>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Image = (props: Image) => {
  return (
	<>
		<ImageStyle {...props} source={props.img} />
	</>
  )
}

export default Image;