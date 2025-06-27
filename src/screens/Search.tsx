import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTMDB from '../hooks/useTMDB';
import MovieCard from '../components/MovieCard';
import MovieDetailModal from '../components/MovieDetailModal';
import {useMovieModal} from '../context/MovieModalContext';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length >= 3) {
        setDebouncedQuery(query);
      } else {
        setDebouncedQuery('');
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const {movies: searchMovies, loading: isLoading} = useTMDB(
    debouncedQuery ? '/search/movie' : '',
    debouncedQuery ? {query: debouncedQuery} : {},
  );

  const {state, dispatch} = useMovieModal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Search movies..."
          placeholderTextColor="#888"
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#F3C15D" style={styles.loader} />
      ) : (
        <FlatList
          data={searchMovies}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({item}) => <MovieCard movie={item} />}
          ListEmptyComponent={
            debouncedQuery ? (
              <Text style={styles.empty}>No results found</Text>
            ) : null
          }
        />
      )}
      <MovieDetailModal
        isVisible={state.isVisible}
        movie={state.movie!}
        onClose={() => dispatch({type: 'CLOSE_MODAL'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  list: {
    paddingBottom: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  loader: {
    marginTop: 50,
  },
  empty: {
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});

export default SearchScreen;
