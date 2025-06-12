import {FlatList, Image, StyleSheet, View} from 'react-native';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  image: {
    width: 180,
    height: 250,
    margin: 5,
    borderRadius: 8,
  },
});

export interface Movie {
  id: string;
  poster_path: string;
}

interface MoviesProps {
  movies: Movie[];
}

const Movies = ({movies}: MoviesProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <Image
            style={styles.image}
            source={{uri: `${POSTER_BASE_URL}${item.poster_path}`}}
          />
        )}
      />
    </View>
  );
};
export default Movies;
