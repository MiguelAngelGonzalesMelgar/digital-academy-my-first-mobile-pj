import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>👷🏽‍♂️ Building... 🏗️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(13, 12, 12, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Gilroy-bold',
    fontSize: 21,
    padding: 16,
  },
});

export default Profile;
