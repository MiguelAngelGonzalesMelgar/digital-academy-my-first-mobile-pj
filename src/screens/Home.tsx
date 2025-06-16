import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getBestMovies, getMarvelMovies} from '../utils/service/TMDBService';
import Movies, {Movie} from '../components/Movies';
import Slider from '../components/Slider';
import CarouselHeader from '../components/CarouselHeader';

const Home = () => {
  const [bestMovies, setBestMovies] = useState<Movie[]>([]);
  const [marvelMovies, setMarvelMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const [bestMoviesData, marvelMoviesData] = await Promise.all([
          getBestMovies(),
          getMarvelMovies(),
        ]);

        setBestMovies(bestMoviesData || []);
        setMarvelMovies(marvelMoviesData || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}>
        <Slider />
        <View style={styles.contentContainer}>
          {isLoading ? (
            <>
              <ActivityIndicator size="large" color="#F3C15D" />
              <Text style={styles.statusText}>Loading movies...</Text>
            </>
          ) : (
            <>
              <CarouselHeader title="Marvel Studios" onLinkPress={() => {}} />
              <Movies movies={marvelMovies} />
              <CarouselHeader title="Best movies" onLinkPress={() => {}} />
              <Movies movies={bestMovies} floatingMovieTitle={false} />
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
  statusText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    alignSelf: 'center',
  },
});

export default Home;
