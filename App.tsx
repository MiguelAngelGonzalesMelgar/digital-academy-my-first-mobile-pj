import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/screens/Home';
import {MovieModalProvider} from './src/context/MovieModalContext';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <MovieModalProvider>
        <Home />
      </MovieModalProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
