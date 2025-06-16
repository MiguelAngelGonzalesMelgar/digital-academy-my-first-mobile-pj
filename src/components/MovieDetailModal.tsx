import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {Movie} from './Movies';
import {Image} from 'react-native-reanimated/lib/typescript/Animated';

export interface MovieDetail extends Movie {
  overview: string;
  releaseDate: string;
  backdropPath: string;
  ranking: number;
}

interface ModalProps {
  movie: MovieDetail;
  isVisible: boolean;
  onClose: () => void;
}

function MovieDetailModal({movie, isVisible, onClose}: ModalProps) {
  if (!movie) return null;

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContent}>
        <Image source={{uri: movie.backdropPath}} style={styles.image} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text>{movie.overview}</Text>
        <Text>{movie.releaseDate}</Text>
        <Text>{movie.ranking} ⭐️</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {},
  image: {},
  title: {
    fontFamily: 'Gilroy-Bold',
  },
});

export default MovieDetailModal;
