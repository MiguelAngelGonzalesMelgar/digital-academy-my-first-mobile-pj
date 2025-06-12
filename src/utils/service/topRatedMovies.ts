interface Movies {
  id: string;
  vote_average: number;
  poster_path: string;
}
export function getTopRatedMovies(movies: Movies[], minRating = 7, limit = 5) {
  return movies
    .filter(movie => movie.vote_average >= minRating)
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, limit);
}
