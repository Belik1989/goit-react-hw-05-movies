import PropTypes from 'prop-types';
import { AuthorName } from './Reviews.styled';

export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <>
      <AuthorName>{author.toUpperCase()}</AuthorName>
      <p>{content}</p>
    </>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
