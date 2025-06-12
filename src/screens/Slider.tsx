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

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const {width, height} = Dimensions.get('window');

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
          const top5Movies = results.slice(5);
          setMovies(top5Movies);
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
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.4}
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
        containerStyle={styles.paginationContainer}
        onPress={onPressPagination}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  paginationDot: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  paginationContainer: {
    gap: 5,
    marginTop: 10,
    paddingBottom: 20,
  },
});

export default Slider;
