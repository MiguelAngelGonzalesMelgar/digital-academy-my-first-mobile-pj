import React from 'react';
import {MovieModalProvider} from './src/context/MovieModalContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SeeMore from './src/screens/SeeMore';
import Wishlist from './src/screens/Wishlist';

const Stack = createNativeStackNavigator();

const TabNavigatorComponent = () => {
  return <MainNavigator />;
};

function App(): React.JSX.Element {
  return (
    <MovieModalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTabs"
            component={TabNavigatorComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SeeMore"
            component={SeeMore}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Wishlist"
            component={Wishlist}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MovieModalProvider>
  );
}

export default App;
