import {MovieDetail} from '../interfaces/tmdb';

export type RootStackParamList = {
  Home: undefined;
  SeeMore: {payload: MovieDetail[]};
  Wishlist: undefined;
};
