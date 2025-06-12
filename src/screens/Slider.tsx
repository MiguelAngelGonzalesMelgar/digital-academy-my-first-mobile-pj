import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {getPopularMovies} from '../utils/service/TMDBService';
import {Movie} from '../components/Movies';
import {getTopRatedMovies} from '../utils/service/topRatedMovies';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const {width, height} = Dimensions.get('window');
const SLIDER_HEIGHT = height * 0.5;
const PAGINATION_HEIGHT = 30;

const Slider = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const results = await getPopularMovies();
        if (Array.isArray(results)) {
          const topRatedMovies = getTopRatedMovies(results);
          setMovies(topRatedMovies);
          console.log(topRatedMovies);
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
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.statusText}>Loading movies...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (movies.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.statusText}>No movies found.</Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, {height: SLIDER_HEIGHT + PAGINATION_HEIGHT}]}>
      <Carousel
        ref={ref}
        width={width}
        height={SLIDER_HEIGHT}
        data={movies}
        onProgressChange={progress}
        renderItem={({item}) => (
          <View style={styles.slideContainer}>
            <Image
              source={{uri: `${POSTER_BASE_URL}${item.poster_path}`}}
              style={styles.slideImage}
              resizeMode="cover"
            />
          </View>
        )}
      />
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
    marginBottom: 20,
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
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    marginTop: 5,
  },
  slideImage: {
    width: '90%',
    height: '100%',
  },
  paginationDot: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: 8,
    height: 8,
    marginHorizontal: 4,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
});

export default Slider;
