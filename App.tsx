import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StripeProvider } from '@stripe/stripe-react-native';
import Stacks from './src/navigation/Stacks';
import store from './src/redux/store';
import { STRIPE_PUBLISHABLE_KEY } from '@env';

LogBox.ignoreLogs([`to contain units`])

const App = () => {
  return (
    <Provider 
			store={store}
		>
      <NavigationContainer>
				<StripeProvider
					publishableKey={STRIPE_PUBLISHABLE_KEY}
				>
					<Stacks />
				</StripeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
