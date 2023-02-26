import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMoviesByName } from 'services/ApiFetch';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');

  const searchQuery = searchParams.get('query');

  const changeFilter = query => {
    setQuery(query);
  };

  const onSearch = event => {
    event.preventDefault();
    setSearchParams(query !== '' ? { query: query } : {});
  };

  useEffect(() => {
    if (searchQuery) {
      fetchMoviesByName(searchQuery).then(setMovies);
    }
  }, [searchQuery]);
  return (
    <div>
      <Searchbar
        value={query}
        onSearch={onSearch}
        onChangeFilter={changeFilter}
      />
      {movies && <MoviesList movies={movies} />}
      {movies && movies.length === 0 && (
        <div>There are not movies with such name</div>
      )}
    </div>
  );
};

export default Movies;
