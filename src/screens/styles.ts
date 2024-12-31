import styled from 'styled-components/native';

const ScreenContainer = styled.ScrollView`
  paddingHorizontal: 15;
`;

const ViewCartWrapper = styled.View`
	position: absolute;
	z-index: 10;
	bottom: 60;
	width: 70%;
	alignSelf: center;
`;

export { ScreenContainer, ViewCartWrapper };
