import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Movie} from './Movies';
import {POSTER_BASE_URL} from '@env';
import FMButton from './FMButton';

export interface MovieDetail extends Movie {
  overview?: string;
  releaseDate?: string;
  backdrop_path?: string;
  vote_average?: number;
}

interface ModalProps {
  movie: MovieDetail;
  isVisible: boolean;
  onClose: () => void;
}

function MovieDetailModal({movie, isVisible, onClose}: ModalProps) {
  if (!movie) return null;

  return (
    <Modal isVisible={isVisible} animationIn={'fadeIn'}>
      <View style={styles.modalContent}>
        <Image
          source={{uri: `${POSTER_BASE_URL}${movie.backdrop_path}`}}
          style={styles.image}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.text}>{movie.overview}</Text>
        <Text style={styles.text}>{movie.releaseDate}</Text>
        <Text style={styles.text}>
          Rating: {movie.vote_average?.toFixed(1)} ⭐️
        </Text>
        <FMButton
          onPress={onClose}
          style={styles.FmButton}
          textStyle={{color: '#000000'}}>
          Go back
        </FMButton>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'rgba(15, 14, 14, 0.9)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    borderRadius: 8,
    marginVertical: 30,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Gilroy-Bold',
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginVertical: 4,
    fontFamily: 'Gilroy-Medium',
    lineHeight: 21,
  },
  FmButton: {
    backgroundColor: '#F3C15D',
    width: 200,
    marginTop: 16,
  },
});

export default MovieDetailModal;
