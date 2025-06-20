import {StyleSheet, Text, View} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/navigationTypes';
import FMButton from '../components/FMButton';

type SeeMoreType = RouteProp<RootStackParamList, 'SeeMore'>;

const SeeMore = () => {
  const route = useRoute<SeeMoreType>();
  const {title} = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FMButton onPress={handleNavigation} style={styles.navButton}>
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
