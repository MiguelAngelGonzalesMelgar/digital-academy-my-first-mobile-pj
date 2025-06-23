import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import FMButton from './FMButton';

interface FMCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  textButton: string;
  onPress?: () => void;
}

const FMCard = ({
  imageUrl,
  title,
  description,
  textButton,
  onPress,
}: FMCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/black-friday.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <FMButton textColor="#00000" onPress={onPress!} style={styles.button}>
        {textButton}
      </FMButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 195,
    marginTop: 32,
    marginBottom: 13,
  },
  button: {
    fontFamily: 'Gilroy-Light',
    width: '100%',
    height: 60,
    backgroundColor: '#F3C15D',
    color: '#000000',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Gilroy-bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  description: {
    fontFamily: 'Gilroy',
    fontSize: 14,
    paddingBottom: 20,
    color: '#ffffff',
  },
});

export default FMCard;
