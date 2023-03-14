import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchGetTrending, baseApiUrlForPoster } from '../../services/tmdb-api';
import css from './HomeView.module.css';

export const HomeView = () => {
  const [movies, setMovies] = useState();
  const location = useLocation();
  const posterWidth = 170;
  const posterMissing = 'https://i.pinimg.com/564x/4a/ba/8e/4aba8ea1da0dfda916d05a913b7ef6e3.jpg';
  
  useEffect(() => {
    fetchGetTrending()
      .then(({ results }) => {
        if (!results) {
          console.log("Not found movies");
          return;
        }
        setMovies(results);
      })
      .catch(error => console.log(error.message));    
  }, []); 
  
  return (
    <>
      <div className={css.TitleBox}>
        <h1 className={css.Title}>Trending Movies</h1>
      </div>
      
      <div className={css.Container}>
        {movies && (
          <ul className={css.MoviesList}>
            {movies.map(({ id, title, poster_path }) => (            
                <li className={css.MoviesListItem} key={id}>                
                  <Link
                    className={css.MoviesListItemLink}
                    to={`/movies/${id}`}
                    state={{ from: location }}
                  >
                    <img
                      className={css.MovieListItemImg}
                      src={poster_path
                            ? `${baseApiUrlForPoster}${poster_path}`
                            : posterMissing}
                      alt={title}
                      width={posterWidth}
                    />                    
                    <h3 className={css.MovieListItemTitle}>{title}</h3>                    
                  </Link>                
                </li>            
            ))}
          </ul>
        )}
      </div>
    </>
  );
};