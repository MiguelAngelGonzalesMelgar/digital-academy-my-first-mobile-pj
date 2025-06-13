import axios from 'axios';
import {TMDB_ACCESS_TOKEN, TMDB_BASE_URL} from '@env';

export const getRecentMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/now_playing`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        language: 'en-US',
      },
    });
    return response.data.results;
  } catch (error: any) {
    console.error(
      'Cannot get popular movies:',
      error.response?.data || error.message || error,
    );
    throw error;
  }
};
export const getBestMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        language: 'en-US',
        pages: 2,
      },
    });
    return response.data.results;
  } catch (error: any) {
    console.error(
      'Cannot get popular movies:',
      error.response?.data || error.message || error,
    );
    throw error;
  }
};
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        language: 'en-US',
      },
    });
    return response.data.results;
  } catch (error: any) {
    console.error(
      'Cannot get popular movies:',
      error.response?.data || error.message || error,
    );
    throw error;
  }
};
