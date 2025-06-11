import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';

const sliderStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 10,
  },
  headers: {
    flexDirection: 'row',
    gap: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    alignSelf: 'center',
  },
  numberContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: '40%',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Slider = () => {
  return (
    <View style={sliderStyles.mainContainer}>
      <View style={sliderStyles.headers}>
        <Text>My list</Text>
        <Text>Discover</Text>
      </View>
      <View style={sliderStyles.numberContainer}>
        <View style={sliderStyles.content}>
          <Text>1</Text>
        </View>
      </View>
      <View style={sliderStyles.buttonContainer}>
        <View>
          <CustomButton onPress={() => {}}>
            <Text>Wishlist</Text>
          </CustomButton>
        </View>
        <View>
          <CustomButton onPress={() => {}}>
            <Text>Details</Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default Slider;
