import styled from 'styled-components/native';
import { FONTS, FONTS_SIZE, COLORS } from '../../constants';

const MapInfoStyle = styled.View`
	position: absolute;
	// width: 90%;
	alignSelf: center;
	top: 15;
	backgroundColor: #fff;
	paddingVertical: 15;
	paddingHorizontal: 15;
	borderRadius: 10;
`;

const MapInfoText = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const MapInfoDistance = styled(MapInfoText)`
	marginBottom: 3;
`;

const MapInfoDuration = styled(MapInfoText)`
	marginBottom: 3;
`;

export { MapInfoStyle, MapInfoText, MapInfoDistance, MapInfoDuration };