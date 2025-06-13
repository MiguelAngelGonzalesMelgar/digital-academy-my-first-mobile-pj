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
  showMovieTitle?: boolean;
}

const Movies = ({movies, showMovieTitle = true}: MoviesProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <View style={styles.movieItemContainer}>
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
            {showMovieTitle && item.title && (
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
    paddingHorizontal: 5,
  },
  movieItemContainer: {
    marginHorizontal: 5,
    alignItems: 'center',
    width: 150,
  },
  image: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  movieTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'semibold',
    textAlign: 'left',
    marginVertical: 10,
  },
});

export default Movies;
