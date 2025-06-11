import axios from 'axios';
import {TMDB_ACCESS_TOKEN, TMDB_BASE_URL} from '@env';

export const getPopularMovies = async () => {
  console.log(TMDB_ACCESS_TOKEN);
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        laguages: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log('Cannot get popular movies', error);
  }
};
