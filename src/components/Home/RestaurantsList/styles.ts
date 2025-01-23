import styled from 'styled-components/native';
import { FONTS, FONTS_SIZE } from '../../../constants';

const Container = styled.View`
	marginBottom: 30px;
`;

const EmptyText = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.medium18};
`;

export { Container, EmptyText };
