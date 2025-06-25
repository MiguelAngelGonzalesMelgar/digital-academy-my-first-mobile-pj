import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {useWishlist} from '../context/WishlistContext';
import {Movie} from '../interfaces/tmdb';
import Icon from 'react-native-vector-icons/Ionicons';

interface WishlistProps {
  item: Movie;
  style?: ViewStyle;
}

const AddToWishlist = ({item, style}: WishlistProps) => {
  const {isInWishlist, toggleWishlistItem} = useWishlist();
  const selected = isInWishlist(item.id);

  const handlePress = () => {
    toggleWishlistItem(item);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <Icon
        name={selected ? 'heart' : 'heart-outline'}
        size={24}
        color="#E3D947"
      />
    </TouchableOpacity>
  );
};

export default AddToWishlist;
