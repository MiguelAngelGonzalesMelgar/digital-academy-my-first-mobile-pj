import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Home from './src/screens/Home';
import Slider from './src/screens/Slider';
import Movies from './src/components/Movies';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Home />
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
