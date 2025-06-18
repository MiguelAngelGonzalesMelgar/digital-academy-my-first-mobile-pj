import {TMDB_ACCESS_TOKEN, TMDB_BASE_URL} from '@env';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {useReducer, useEffect} from 'react';
import {MovieDetail} from '../components/MovieDetailModal';

interface State {
  movies: MovieDetail[];
  loading: boolean;
  error: Error | null;
}

interface TMDBResponse {
  results: MovieDetail[];
}

type Action =
  | {type: 'LOADING'}
  | {type: 'SUCCESS'; payload: MovieDetail[]}
  | {type: 'ERROR'; payload: Error};

const dataFetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOADING':
      return {...state, loading: true};
    case 'SUCCESS':
      return {...state, movies: action.payload, loading: false};
    case 'ERROR':
      return {...state, error: action.payload, loading: false};
    default:
      throw new Error('Unhandled action type');
  }
};

const useTMDB = (path: string): State => {
  const initialState = {
    movies: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getMovies = async (path: string) => {
      dispatch({type: 'LOADING'});
      try {
        const response: AxiosResponse<TMDBResponse> = await axios.get(
          `${TMDB_BASE_URL}${path}`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
            params: {
              language: 'en-US',
              page: 1,
            },
            signal: signal,
          },
        );
        dispatch({type: 'SUCCESS', payload: response.data.results});
      } catch (err) {
        const error = err as AxiosError;
        if (axios.isCancel(error)) {
          console.warn('Fetch aborted by user/component unmount');
        } else {
          console.error('API Error:', error);
          dispatch({type: 'ERROR', payload: error});
        }
      }
    };
    getMovies(path);
    return () => {
      controller.abort();
    };
  }, [path]);
  return {...state};
};

export default useTMDB;
