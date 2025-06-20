import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface CarouselHeaderProps {
  title?: string;
  touchableText?: string;
  onLinkPress?: () => void;
}

const CarouselHeader = ({
  title,
  touchableText,
  onLinkPress,
}: CarouselHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity
        onPress={onLinkPress}
        style={styles.linkButton}
        accessibilityRole="link"
        accessibilityLabel={`See more`}>
        <Text style={styles.linkText}>{touchableText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Gilroy-Bold',
  },
  linkButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F3C15D',
    fontFamily: 'Gilroy-bold',
  },
});

export default CarouselHeader;
