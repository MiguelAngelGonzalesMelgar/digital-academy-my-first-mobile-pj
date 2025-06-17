import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Whishlist = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i0.wp.com/thehill.com/wp-content/uploads/sites/2/2022/05/e92ed228a6924420a8963bdc6c9ddef1.jpg?w=2000&ssl=1',
      }}
      style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Your Whishlist</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    marginTop: 32,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Gilroy-bold',
    fontSize: 21,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 32,
    borderRadius: 10,
  },
});

export default Whishlist;
