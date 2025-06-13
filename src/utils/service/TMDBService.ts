import axios from 'axios';
import {TMDB_ACCESS_TOKEN, TMDB_BASE_URL} from '@env';

const headers = {
  Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  'Content-Type': 'application/json',
};

export const getRecentMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/now_playing`, {
      headers: headers,
      params: {
        language: 'en-US',
      },
    });
    return response.data.results;
  } catch (error: any) {
    console.error(
      'Cannot get recent movies:',
      error.response?.data || error.message || error,
    );
    throw error;
  }
};

export const getBestMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      headers: headers,
      params: {
        language: 'en-US',
        pages: 2,
      },
    });
    return response.data.results;
  } catch (error: any) {
    console.error(
      'Cannot get best movies:',
      error.response?.data || error.message || error,
    );
    throw error;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      headers: headers,
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

export const getMarvelMovies = async () => {
  try {
    const marvelStudiosCompanyId = 420;

    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      headers: headers,
      params: {
        language: 'en-US',
        with_companies: marvelStudiosCompanyId,
      },
    });
    return response.data.results;
  } catch (error: any) {
    console.error(
      'Cannot get Marvel movies:',
      error.response?.data || error.message || error,
    );
    throw error;
  }
};
