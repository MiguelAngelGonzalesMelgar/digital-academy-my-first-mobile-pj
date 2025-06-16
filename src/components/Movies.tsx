import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {POSTER_BASE_URL} from '@env';

export interface Movie {
  id: string;
  poster_path: string;
  title?: string;
}

interface MoviesProps {
  movies: Movie[];
  floatingMovieTitle?: boolean;
}

const Movies = ({movies, floatingMovieTitle = true}: MoviesProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <View style={styles.movieItemContainer}>
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
          </View>
        )}
      />
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
