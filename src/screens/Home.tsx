import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {getBestMovies} from '../utils/service/TMDBService';
import Movies, {Movie} from '../components/Movies';
import Slider from '../components/Slider';
import CarouselHeader from '../components/CarouselHeader';

const Home = () => {
  const [bestMovies, setBestMovies] = useState<Movie[]>([]);
  const [marvelMovies, setMarvelBestmovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getBestMovies()
      .then(data => {
        setBestMovies(data || []);
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
          {isLoading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <>
              <CarouselHeader title="Marvel Studios" onLinkPress={() => {}} />
              <Movies movies={bestMovies} />
              <CarouselHeader title="Best movies" onLinkPress={() => {}} />
              <Movies movies={bestMovies} showMovieTitle={false} />
            </>
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
