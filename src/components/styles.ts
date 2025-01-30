import styled from 'styled-components/native';

interface IFlatListSeparator {
	width?: number;
	height?: number;
}

const FlatListSeparator = styled.View<IFlatListSeparator>`
  width: ${(props) => props.width || 0};
	height: ${(props) => props.height || 0};
`;

export { FlatListSeparator };
