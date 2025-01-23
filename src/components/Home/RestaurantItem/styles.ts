import styled from 'styled-components/native';
import { COLORS, FONTS, FONTS_SIZE } from '../../../constants';

const Image = styled.Image`
	width: 100%;
	aspectRatio: 1.8;
`;

const Info = styled.View`
  backgroundColor: ${COLORS.white};
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  paddingVertical: 5;
  paddingHorizontal: 10;
  borderBottomLeftRadius: 10;
  borderBottomRightRadius: 10;
`;

const Name = styled.Text`
	fontFamily: ${FONTS.poppinsSemiBold};
  fontSize: ${FONTS_SIZE.medium16};
  color: ${COLORS.black};
`;

const Price = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.mediumGray};
`;

const RatingWrapper = styled.View`
  backgroundColor: ${COLORS.lightGray};
  alignItems: center;
  justifyContent: center;
  width: 35;
  height: 35;
  borderRadius: 100;
`;

const Rating = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

export { Image, Info, Name, Price, Rating, RatingWrapper };
