export interface Movie {
  id: number;
  poster_path: string;
  title?: string;
}

export interface MovieDetail extends Movie {
  overview?: string;
  releaseDate?: string;
  backdrop_path?: string;
  vote_average?: number;
}

export interface TMDBResponse {
  results: MovieDetail[];
}
