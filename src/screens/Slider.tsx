import {Button, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';

const sliderStyles = StyleSheet.create({
  mainContainer: {
    marginVertical: 70,
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  headers: {
    flexDirection: 'row',
    gap: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    marginVertical: 70,
    alignSelf: 'center',
  },
  numberContainer: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 170,
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
  buttonStyle: {
    color: 'green',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
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
