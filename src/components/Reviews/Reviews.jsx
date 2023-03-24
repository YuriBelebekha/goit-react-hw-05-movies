import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from '../../services/tmdb-api';
import { Loader } from '../Loader/Loader';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    movieId &&
    fetchGetMovieReviews(movieId)
      .then((data) => {
        setIsLoading(false);
        setReviews(data.results);
      })
      .catch((error) => console.log(error.message))
      .finally(
        setIsLoading(true)
      )
  }, [movieId])

  return (
    <>
      <div className={css.Container}>
        {isLoading && <Loader />}
        {reviews.length > 0 ? (
          <ul className={css.ReviewsList}>
            {reviews.map(({ id, author, content }) => (
              <li className={css.ReviewsListItem} key={id}>
                <h3 className={css.ReviewsListItemAuthor}>Author: {author}</h3>
                <p className={css.ReviewsListItemContent}>{content}</p>
              </li>
            ))}
          </ul>
        ) : (<b>Sorry, there is no reviews for this movie</b>)}
      </div>
    </>
  )
};