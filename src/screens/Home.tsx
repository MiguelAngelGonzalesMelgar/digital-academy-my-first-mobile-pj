import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getPopularMovies} from '../utils/service/TMDBService';

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#1d49e8',
  },
});

const Home = () => {
  useEffect(() => {
    getPopularMovies().then(data => {
      console.log(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Component</Text>
    </View>
  );
};

export default Home;
