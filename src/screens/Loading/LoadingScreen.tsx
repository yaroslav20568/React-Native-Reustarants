import React from 'react';
import Lottie from 'lottie-react-native';
import { ScreenContainer } from './styles';

const LoadingScreen = () => {
  return (
    <ScreenContainer>
      <Lottie 
				source={require('../../assets/animations/screen-loader.json')}
				autoPlay={true}
				duration={3000}
			/>
    </ScreenContainer>
  );
};

export default LoadingScreen;
