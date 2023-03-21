import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link, Outlet } from 'react-router-dom';
import { fetchGetMovieDetails, baseApiUrlForPoster, posterMissing, posterWidth } from 'services/tmdb-api';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();  
  
  const { poster_path, title, release_date, vote_average, overview, genres } = movie ?? {};
  const releaseYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);
  const genresList = genres ? genres.map(({name}) => name).join(' ') : [];

  useEffect(() => {
    movieId &&
      fetchGetMovieDetails(movieId)
        .then(results => {
          setMovie(results);
        })    
  }, [movieId]);

  const goBackToMoviesPage = () => {
    navigate(location.state?.from ?? '/movies');
  };

  return (
    <>
      <button
        className={css.GoBackBtn}
        type="button"
        onClick={goBackToMoviesPage}
      >
        Go back
      </button>

      <div className={css.MovieDetailsBox}>
        <img
          className={css.MoviePoster}
          src={poster_path
            ? `${baseApiUrlForPoster}${poster_path}`
            : posterMissing}
          alt={title}          
          width={posterWidth * 2}
        />
        
        <div className={css.MovieDetails}>
          <h1>{title} ({releaseYear})</h1>          
          <p className={css.MovieDetail}>
            User Score: {userScore}%
          </p>
          
          <div>
            <p className={css.MovieDetail}>
              Overview
            </p>
            <p className={css.MovieDetailText}>
              {overview}
            </p>
          </div>

          <div>
            <p className={css.MovieDetail}>
              Genres
            </p>
            <p className={css.MovieDetailText}>
              {genresList || 'Not specified'}
            </p>
          </div>
        </div>
      </div>

      <div className={css.AddInfoBox}>
        <h2 className={css.AddInfoTitle}>Additional Info</h2>
        
        <ul className={css.AddInfoList}>
          <li className={css.AddInfoListItem}>            
            <Link
              className={css.AddInfoListItemLink}
              to={'cast'}
              state={{ from: location?.state?.from }}
            >
              Cast
            </Link>            
          </li>
          
          <li className={css.AddInfoListItem}>            
            <Link
              className={css.AddInfoListItemLink}
              to={'reviews'}
              state={{ from: location?.state?.from }}
            >              
              Reviews                           
            </Link>            
          </li>
        </ul>

        <Outlet />
      </div>
    </>
  )
};