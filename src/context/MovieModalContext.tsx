import React, {createContext, ReactNode, useContext, useReducer} from 'react';
import {MovieDetail} from '../interfaces/tmdb';

type ModalState = {
  isVisible: boolean;
  movie: MovieDetail | null;
};

type ModalAction =
  | {type: 'OPEN_MODAL'; payload: MovieDetail}
  | {type: 'CLOSE_MODAL'};

const initialState: ModalState = {
  isVisible: false,
  movie: null,
};

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {isVisible: true, movie: action.payload};
    case 'CLOSE_MODAL':
      return {isVisible: false, movie: null};
    default:
      return state;
  }
};

const MovieModalContext = createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalAction>;
}>({state: initialState, dispatch: () => {}});

export const useMovieModal = () => useContext(MovieModalContext);

export const MovieModalProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <MovieModalContext.Provider value={{state, dispatch}}>
      {children}
    </MovieModalContext.Provider>
  );
};
