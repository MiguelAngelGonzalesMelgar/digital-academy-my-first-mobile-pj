import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {getPopularMovies} from '../utils/service/TMDBService';
import Movies, {Movie} from '../components/Movies';

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#000000',
    flex: 1,
    minHeight: '40%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
});

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getPopularMovies()
      .then(data => {
        setMovies(data || []);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Movies</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Movies movies={movies} />
      )}
    </View>
  );
};

export default Home;
