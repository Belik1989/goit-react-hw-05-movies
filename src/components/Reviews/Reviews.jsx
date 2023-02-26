import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/ApiFetch';
import { ReviewItem } from './ReviewItem';
import { ReviewsList } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      {reviews.length === 0 && 'No reviews for this movie yet.'}
      <ReviewsList>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewItem review={review} />
          </li>
        ))}
      </ReviewsList>
    </div>
  );
};
