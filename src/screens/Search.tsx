import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search your favorite movie..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={handleSearch}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
    paddingTop: 70,
  },
  input: {
    height: 45,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 30,
    color: '#fff',
    backgroundColor: '#1c1c1e',
    fontSize: 16,
    fontFamily: 'Gilroy-Regular',
  },
});

export default Search;
