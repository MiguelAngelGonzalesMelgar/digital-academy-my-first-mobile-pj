import React from 'react';
import {MovieModalProvider} from './src/context/MovieModalContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigation';

function App(): React.JSX.Element {
  return (
    <MovieModalProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </MovieModalProvider>
  );
}

export default App;
