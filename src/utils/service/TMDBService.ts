import axios from 'axios';
import {API_KEY, TMDB_BASE_URL} from '@env';

const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}movie/popular`);
  } catch (error) {}
};
