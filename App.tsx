import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/screens/Home';
import {MovieModalProvider} from './src/context/MovieModalContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Whishlist from './src/screens/Whishlist';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {/* <MovieModalProvider>
        <Home />
      </MovieModalProvider> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Whishlist" component={Whishlist} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
