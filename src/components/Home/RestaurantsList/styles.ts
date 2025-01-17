import styled from 'styled-components/native';
import { FONTS, FONTS_SIZE } from '../../../constants';

const RestaurantsContainer = styled.View`
	marginBottom: 30px;
`;

const RestaurantsEmptyText = styled.Text`
	fontFamily: ${FONTS.poppinsRegular};
	fontSize: ${FONTS_SIZE.medium18};
`;

export { RestaurantsContainer, RestaurantsEmptyText };
