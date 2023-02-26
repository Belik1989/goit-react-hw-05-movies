import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { IMAGE_URL, fetchMovieInfo } from 'services/ApiFetch';
import { paths } from 'router/paths';
import {
  DetailsBox,
  ExtraInform,
  ExtraInformItem,
  Overview,
} from './MovieDetails.styled';
import { Container } from 'components/SiteHeader/SiteHeader.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [linkBack] = useState(() => location.state?.from ?? paths.movies);

  useEffect(() => {
    fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <Container>
      <ButtonBack path={linkBack} />
      <DetailsBox>
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={`${movie.title}`}
          height="250"
        />
        <div>
          <h2>{movie.title}</h2>
          <h3>Overview</h3>
          <Overview>{movie.overview}</Overview>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name + ' / ')}</p>
        </div>
      </DetailsBox>
      <ExtraInform>
        <li>
          <ExtraInformItem to={`cast`}>Cast</ExtraInformItem>
        </li>
        <li>
          <ExtraInformItem to={`reviews`}>Reviews</ExtraInformItem>
        </li>
      </ExtraInform>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
