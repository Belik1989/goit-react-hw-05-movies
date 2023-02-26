import { IMAGE_URL } from 'services/ApiFetch';
import PropTypes from 'prop-types';
import { NoImage } from './Cast.styled';

export const CastItem = ({ castItem: { name, character, profile_path } }) => {
  return (
    <>
      <span>
        {profile_path ? (
          <img
            src={`${IMAGE_URL}${profile_path}`}
            alt={`${name}`}
            height="100"
          />
        ) : (
          <NoImage />
        )}
      </span>
      <span>{name}</span>
      <span>"{character}"</span>
    </>
  );
};

CastItem.propTypes = {
  castItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
    profile_path: PropTypes.string,
  }),
};
