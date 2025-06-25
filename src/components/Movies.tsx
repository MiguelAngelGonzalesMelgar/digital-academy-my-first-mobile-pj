import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {POSTER_BASE_URL} from '@env';

import {MovieDetail} from '../interfaces/tmdb';
import {useMovieModal} from '../context/MovieModalContext';
import CarouselHeader from './CarouselHeader';
import AddToWishlist from './AddToWishlist';

interface MoviesProps {
  movies: MovieDetail[];
  floatingMovieTitle?: boolean;
  title?: string;
  touchableText?: string;
  onPress?: () => void;
  isHorizontal?: boolean;
}

const Movies = ({
  movies,
  floatingMovieTitle = true,
  title,
  touchableText,
  onPress,
  isHorizontal = true,
}: MoviesProps) => {
  const {dispatch} = useMovieModal();

  return (
    <View style={styles.container}>
      <CarouselHeader
        title={title}
        touchableText={touchableText}
        onLinkPress={onPress}
      />
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        horizontal={isHorizontal}
        numColumns={isHorizontal ? 1 : 2}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => dispatch({type: 'OPEN_MODAL', payload: item})}
            style={styles.movieItemContainer}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={{uri: `${POSTER_BASE_URL}${item.poster_path}`}}
                defaultSource={{
                  uri: 'https://placehold.co/150x200/cccccc/000000?text=No+Image',
                }}
                onError={error =>
                  console.log('Error loading image:', error.nativeEvent.error)
                }
              />
              {!floatingMovieTitle && item.title && (
                <Text style={styles.floatingTitle}>{item.title} ⭐️</Text>
              )}
              <AddToWishlist item={item} style={styles.wishlist} />
            </View>
            {floatingMovieTitle && item.title && (
              <Text style={styles.movieTitle}>{item.title}</Text>
            )}
          </TouchableOpacity>
        )}
        columnWrapperStyle={!isHorizontal ? styles.columnWrapper : undefined}
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
    width: 160,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 16,
    gap: 12,
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
  wishlist: {
    position: 'absolute',
    right: 2,
    top: 2,
    backgroundColor: 'rgba(102, 102, 102, 0.6)',
    borderRadius: 12,
    padding: 5,
  },
});

export default Movies;
