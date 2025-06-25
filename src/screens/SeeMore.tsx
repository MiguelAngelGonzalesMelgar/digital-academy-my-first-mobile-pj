import {StyleSheet, View} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/navigationTypes';
import FMButton from '../components/FMButton';
import Movies from '../components/Movies';
import {useMovieModal} from '../context/MovieModalContext';
import MovieDetailModal from '../components/MovieDetailModal';

type SeeMoreType = RouteProp<RootStackParamList, 'SeeMore'>;

const SeeMore = () => {
  const route = useRoute<SeeMoreType>();
  const {payload} = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {state, dispatch} = useMovieModal();

  const handleNavigation = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <View style={styles.container}>
      <Movies movies={payload} isHorizontal={false} />
      <MovieDetailModal
        movie={state.movie!}
        isVisible={state.isVisible}
        onClose={() => dispatch({type: 'CLOSE_MODAL'})}
      />
      <FMButton
        onPress={handleNavigation}
        style={styles.navButton}
        textColor={'#000000'}>
        Wishlist
      </FMButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  navButton: {
    backgroundColor: '#F3C15D',
    fontFamily: 'Gilroy-bold',
    fontSize: 16,
    width: '70%',
    height: 50,
  },
});

export default SeeMore;
