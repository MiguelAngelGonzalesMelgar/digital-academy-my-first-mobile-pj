import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Movies from '../components/Movies';
import Slider from '../components/Slider';
import MovieDetailModal from '../components/MovieDetailModal';
import {useMovieModal} from '../context/MovieModalContext';
import useTMDB from '../hooks/useTMDB';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/navigationTypes';
import {MovieDetail} from '../interfaces/tmdb';
import FMCard from '../components/FMCard';

const Home = () => {
  const {state, dispatch} = useMovieModal();

  const {movies: recentMovies, loading: recentLoading} =
    useTMDB('/movie/now_playing');
  const {movies: bestMovies, loading: bestLoading} =
    useTMDB('/movie/top_rated');
  const {movies: marvelMovies, loading: marvelLoading} = useTMDB(
    '/discover/movie',
    {with_companies: 420},
  );
  const {movies: horrorMovies, loading: horrorLoading} = useTMDB(
    '/discover/movie',
    {with_genres: 27},
  );
  const {movies: animationMovies, loading: animationLoading} = useTMDB(
    '/discover/movie',
    {with_genres: 16},
  );

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const isLoading =
    recentLoading ||
    bestLoading ||
    marvelLoading ||
    horrorLoading ||
    animationLoading;

  const handleSeeMore = (payload: MovieDetail[]) => {
    navigation.navigate('SeeMore', {
      payload,
    });
  };

  const handleCheckDetails = () => {
    console.log('Handle details');
  };
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
            <Slider movies={recentMovies} />
            <Movies
              movies={marvelMovies}
              title="Marvel Studios"
              touchableText="See More"
              onPress={() => handleSeeMore(marvelMovies)}
            />
            <Movies
              movies={bestMovies}
              title="Best Movies"
              touchableText="See More"
              floatingMovieTitle={false}
              onPress={() => handleSeeMore(bestMovies)}
            />
            <View style={{marginTop: 21}}>
              <Movies
                movies={horrorMovies}
                title="Horror Movies"
                touchableText="See More"
                onPress={() => handleSeeMore(horrorMovies)}
              />
            </View>
            <Movies
              movies={animationMovies}
              title="Animation Movies"
              touchableText="See More"
              floatingMovieTitle={false}
              onPress={() => handleSeeMore(animationMovies)}
            />
          </>
        )}
        <MovieDetailModal
          movie={state.movie!}
          isVisible={state.isVisible}
          onClose={() => dispatch({type: 'CLOSE_MODAL'})}
        />
        <FMCard
          title={'Black friday is here!'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sociis pulvinar auctor nibh nibh iaculis id.'
          }
          textButton={'Check details'}
          onPress={handleCheckDetails}
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
