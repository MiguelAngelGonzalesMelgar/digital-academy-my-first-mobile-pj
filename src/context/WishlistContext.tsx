import React, {createContext, useContext, useState, ReactNode} from 'react';
import {Movie} from '../interfaces/tmdb';

interface WishlistContextType {
  wishlist: Movie[];
  addToWishlist: (movie: Movie) => void;
  removeFromWishlist: (movieId: number) => void;
  toggleWishlistItem: (movie: Movie) => void;
  isInWishlist: (movieId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({children}: {children: ReactNode}) => {
  const [wishlist, setWishlist] = useState<Movie[]>([]);

  const addToWishlist = (movie: Movie) => {
    setWishlist(prev => [...prev, movie]);
  };

  const removeFromWishlist = (movieId: number) => {
    setWishlist(prev => prev.filter(m => m.id !== movieId));
  };

  const toggleWishlistItem = (movie: Movie) => {
    setWishlist(prev =>
      prev.find(m => m.id === movie.id)
        ? prev.filter(m => m.id !== movie.id)
        : [...prev, movie],
    );
  };

  const isInWishlist = (movieId: number) => {
    return wishlist.some(m => m.id === movieId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlistItem,
        isInWishlist,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};
