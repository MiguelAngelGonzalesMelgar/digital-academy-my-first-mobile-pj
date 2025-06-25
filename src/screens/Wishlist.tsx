import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ListRenderItem,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useWishlist} from '../context/WishlistContext';
import {Movie} from '../interfaces/tmdb';

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const itemMargin = 16;
const itemWidth = (screenWidth - itemMargin * (numColumns + 1)) / numColumns;

const styles = StyleSheet.create({
  wishlistScreen: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontFamily: 'Gilroy-bold',
    color: '#fff',
  },
  movieCard: {
    position: 'relative',
    width: itemWidth,
    margin: itemMargin / 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  movieImage: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 8,
  },
  trashIconWrapper: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(128,128,128,0.6)',
    padding: 4,
    borderRadius: 12,
  },
});

const WishlistScreen = () => {
  const {wishlist, removeFromWishlist} = useWishlist();

  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <View style={styles.movieCard}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
        }}
        style={styles.movieImage}
      />
      <TouchableOpacity
        onPress={() => removeFromWishlist(item.id)}
        style={styles.trashIconWrapper}>
        <Icon name="trash" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.wishlistScreen}>
      {wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your Wishlist is Empty</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default WishlistScreen;
