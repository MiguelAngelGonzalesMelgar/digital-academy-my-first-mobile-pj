import React from 'react';
import {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {getRecentMovies} from '../utils/service/TMDBService';
import {Movie} from './Movies';
import {getTopRatedMovies} from '../utils/service/topRatedMovies';
import FMButton from './FMButton';
import {POSTER_BASE_URL} from '@env';
import LinearGradient from 'react-native-linear-gradient';
import {useMovieModal} from '../context/MovieModalContext';

const {width} = Dimensions.get('window');
const SLIDER_HEIGHT = width / (2.3 / 3); //2.5:3 ratio
const PAGINATION_HEIGHT = 30;

const Slider = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const {dispatch} = useMovieModal();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(null);

        const results = await getRecentMovies();
        if (Array.isArray(results)) {
          const topRatedMovies = getTopRatedMovies(results);
          setMovies(topRatedMovies);
        }
      } catch (error: any) {
        console.error('Error fetching popular movies:', error);
        setError(
          `Failed to load movies: ${
            error.message || 'An unknown error occurred.'
          }`,
        );
        setMovies([]);
      } finally {
      }
    };
    fetchMovies();
  }, []);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const handleOpenDetails = () => {
    const movie = movies[currentIndex];
    if (movie) {
      dispatch({type: 'OPEN_MODAL', payload: movie});
    }
  };

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, {height: SLIDER_HEIGHT + PAGINATION_HEIGHT}]}>
      <Carousel
        autoPlay={true}
        autoPlayInterval={3000}
        ref={ref}
        width={width}
        height={SLIDER_HEIGHT}
        data={movies}
        onSnapToItem={setCurrentIndex}
        onProgressChange={progress}
        renderItem={({item}) => (
          <View style={styles.slideContainer}>
            <Image
              source={{uri: `${POSTER_BASE_URL}${item.poster_path}`}}
              style={styles.slideImage}
            />
            <LinearGradient
              colors={['transparent', 'rgb(0, 0, 0)']}
              style={styles.transparentGradient}
            />
          </View>
        )}
      />
      <View style={styles.textOverlayContainer}>
        <Text style={styles.overlayText}>My list</Text>
        <Text style={styles.overlayText}>Discover</Text>
      </View>
      <View style={styles.fixedButtonContainer}>
        <FMButton
          onPress={() => console.log('Add to Wishlist')}
          backgroundColor="#2d2d2d"
          style={styles.floatingButton}
          textStyle={{fontSize: 16, fontWeight: '400'}}>
          + Wishlist
        </FMButton>
        <FMButton
          onPress={handleOpenDetails}
          backgroundColor="#F3C15D"
          style={styles.floatingButton}
          textStyle={{fontSize: 16, color: 'black', fontWeight: '400'}}>
          Details
        </FMButton>
      </View>
      <Pagination.Basic
        progress={progress}
        data={movies}
        dotStyle={styles.paginationDot}
        activeDotStyle={{
          backgroundColor: '#F3C15D',
        }}
        containerStyle={styles.paginationContainer}
        onPress={onPressPagination}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    fontFamily: 'Gilroy-Bold',
  },
  slideContainer: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 8,
    overflow: 'hidden',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paginationDot: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: 8,
    height: 8,
    marginHorizontal: 4,
    marginVertical: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  transparentGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 300,
  },
  textOverlayContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',
    zIndex: 20,
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'light',
    fontFamily: 'Gilroy-Medium',
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    gap: 10,
    zIndex: 10,
    alignSelf: 'center',
    opacity: 0.9,
  },

  floatingButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginLeft: 10,
    width: 160,
    height: 50,
  },
});

export default Slider;
