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
import MovieDetailModal from '../components/MovieDetailModal';
import {useMovieModal} from '../context/MovieModalContext';

const Home = () => {
  const [bestMovies, setBestMovies] = useState<Movie[]>([]);
  const [marvelMovies, setMarvelMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {state, dispatch} = useMovieModal();

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const [bestMoviesData, marvelMoviesData] = await Promise.all([
          getBestMovies(),
          getMarvelMovies(),
          console.log(bestMovies),
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.statusText}>Loading movies...</Text>
            <ActivityIndicator size="large" color="#F3C15D" />
          </View>
        ) : (
          <>
            <Slider />
            <CarouselHeader title="Marvel Studios" onLinkPress={() => {}} />
            <Movies movies={marvelMovies} />
            <CarouselHeader title="Best movies" onLinkPress={() => {}} />
            <Movies movies={bestMovies} floatingMovieTitle={false} />
          </>
        )}
        <MovieDetailModal
          movie={state.movie!}
          isVisible={state.isVisible}
          onClose={() => dispatch({type: 'CLOSE_MODAL'})}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 90,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  statusText: {
    fontSize: 16,
    color: '#666',
    alignSelf: 'center',
  },
});

export default Home;
