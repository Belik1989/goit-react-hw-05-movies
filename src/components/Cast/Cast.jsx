import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/ApiFetch';
import { CastList, CastListItem } from './Cast.styled';
import { CastItem } from './CastItem';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  return (
    <div>
      <CastList>
        {movieCast.map(castItem => (
          <CastListItem key={castItem.id}>
            <CastItem castItem={castItem} />
          </CastListItem>
        ))}
      </CastList>
    </div>
  );
};
