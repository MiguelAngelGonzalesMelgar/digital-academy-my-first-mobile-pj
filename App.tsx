import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MovieModalProvider} from './src/context/MovieModalContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
