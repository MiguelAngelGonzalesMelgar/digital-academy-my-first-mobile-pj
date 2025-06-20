import React from 'react';
import {MovieModalProvider} from './src/context/MovieModalContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SeeMore from './src/screens/SeeMore';
import Wishlist from './src/screens/Wishlist';

const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return <MainNavigator />;
};

function App(): React.JSX.Element {
  return (
    <MovieModalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="SeeMore" component={SeeMore} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
      </NavigationContainer>
    </MovieModalProvider>
  );
}

export default App;
