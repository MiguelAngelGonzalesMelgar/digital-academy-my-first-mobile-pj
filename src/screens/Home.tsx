import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getPopularMovies} from '../utils/service/TMDBService';
import Movies, {Movie} from '../components/Movies';
import Slider from './Slider';
import CarouselHeader from '../components/CarouselHeader';

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
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Slider />
        <View style={styles.contentContainer}>
          <CarouselHeader title="MarvelStudios" onLinkPress={() => {}} />
          {isLoading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <Movies movies={movies} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginLeft: 10,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default Home;
