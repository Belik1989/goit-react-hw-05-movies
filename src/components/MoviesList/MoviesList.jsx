import { Container } from 'components/SiteHeader/SiteHeader.styled';
import { Link, useLocation } from 'react-router-dom';
import { MoviesListBox, MoviesListBoxItem } from './MoviesList.styled';
import { IMAGE_URL } from 'services/ApiFetch';

export const MoviesList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <Container>
      <h2>{title}</h2>
      <MoviesListBox>
        {movies.map(({ id, title, poster_path }) => (
          <MoviesListBoxItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`${IMAGE_URL}${poster_path}`}
                alt={title}
                width="150"
                title={title}
              />
            </Link>
          </MoviesListBoxItem>
        ))}
      </MoviesListBox>
    </Container>
  );
};
