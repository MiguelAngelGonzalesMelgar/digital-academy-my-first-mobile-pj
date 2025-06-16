import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {POSTER_BASE_URL} from '@env';
import {useState} from 'react';
import MovieDetailModal, {MovieDetail} from './MovieDetailModal';

export interface Movie {
  id: string;
  poster_path: string;
  title?: string;
}

interface MoviesProps {
  movies: MovieDetail[];
  floatingMovieTitle?: boolean;
}

const Movies = ({movies, floatingMovieTitle = true}: MoviesProps) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null);

  const handleDetailModal = (movie: MovieDetail) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setSelectedMovie(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleDetailModal(item)}
            style={styles.movieItemContainer}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={{uri: `${POSTER_BASE_URL}${item.poster_path}`}}
                defaultSource={{
                  uri: 'https://placehold.co/150x200/cccccc/000000?text=No+Image',
                }}
                onError={error =>
                  console.log('Error cargando imagen:', error.nativeEvent.error)
                }
              />
              {!floatingMovieTitle && item.title && (
                <Text style={styles.floatingTitle}>{item.title} ⭐️</Text>
              )}
            </View>
            {floatingMovieTitle && item.title && (
              <Text style={styles.movieTitle}>{item.title}</Text>
            )}
          </TouchableOpacity>
        )}
      />
      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          isVisible={isModalVisible}
          onClose={closeModal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieItemContainer: {
    alignItems: 'center',
    width: 150,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 130,
    height: 160,
    borderRadius: 8,
  },
  movieTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    marginVertical: 10,
    fontFamily: 'Gilroy-Medium',
  },
  floatingTitle: {
    position: 'absolute',
    bottom: 0,
    left: 5,
    right: 5,
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    zIndex: 10,
    fontFamily: 'Gilroy-Medium',
  },
});

export default Movies;
