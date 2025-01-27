import styled from 'styled-components/native';
import { FONTS, FONTS_SIZE, COLORS } from '../../../constants';

const Container = styled.View`
	position: absolute;
	alignSelf: center;
	top: 15;
	backgroundColor: #fff;
	paddingVertical: 15;
	paddingHorizontal: 15;
	borderRadius: 10;
`;

const Title = styled.Text`
	fontFamily: ${FONTS.poppinsMedium};
  fontSize: ${FONTS_SIZE.small14};
  color: ${COLORS.black};
`;

const Distance = styled(Title)`
	marginBottom: 3;
`;

const Duration = styled(Title)`
	marginBottom: 3;
`;

export { Container, Title, Distance, Duration };
