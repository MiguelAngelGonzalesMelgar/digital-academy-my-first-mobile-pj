import React from 'react';
import {MovieModalProvider} from './src/context/MovieModalContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SeeMore from './src/screens/SeeMore';
import Wishlist from './src/screens/Wishlist';
import {WishlistProvider} from './src/context/WishlistContext';

const Stack = createNativeStackNavigator();

const TabNavigatorComponent = () => {
  return <MainNavigator />;
};

function App(): React.JSX.Element {
  return (
    <MovieModalProvider>
      <WishlistProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
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
      </WishlistProvider>
    </MovieModalProvider>
  );
}

export default App;
