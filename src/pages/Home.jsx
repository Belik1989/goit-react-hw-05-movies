import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'services/ApiFetch';
import { MoviesList } from 'components/MoviesList/MoviesList';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchPopularMovies('day').then(setMovies);
  }, []);

  return (
    <div>
      {movies.length > 0 && (
        <MoviesList movies={movies} title="Popular movies:" />
      )}
    </div>
  );
};

export default Home;
