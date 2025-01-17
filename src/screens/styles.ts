import styled from 'styled-components/native';

const ScreenContainer = styled.ScrollView`
  paddingHorizontal: 15;
`;

interface IFlatListSeparator {
	width?: number;
	height?: number;
}

const FlatListSeparator = styled.View<IFlatListSeparator>`
  width: ${(props) => props.width || 0};
	height: ${(props) => props.height || 0};
`;

export { ScreenContainer, FlatListSeparator };
