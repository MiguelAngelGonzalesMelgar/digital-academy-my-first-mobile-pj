import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MovieDetail} from '../interfaces/tmdb';
import {POSTER_BASE_URL} from '@env';
import {useMovieModal} from '../context/MovieModalContext';
import AddToWishlist from './AddToWishlist';

const MovieCard = ({movie}: {movie: MovieDetail}) => {
  const {dispatch} = useMovieModal();

  return (
    <TouchableOpacity
      onPress={() => dispatch({type: 'OPEN_MODAL', payload: movie})}
      style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{uri: `${POSTER_BASE_URL}${movie.poster_path}`}}
          defaultSource={{
            uri: 'https://placehold.co/150x200/cccccc/000000?text=No+Image',
          }}
        />
        <AddToWishlist item={movie} style={styles.wishlist} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginVertical: 10,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 150,
    height: 180,
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
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

export default MovieCard;
