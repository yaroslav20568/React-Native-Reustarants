import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/navigation/Stacks';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
		<Stacks />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
