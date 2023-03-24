import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  fetchGetTrending,
  baseApiUrlForPoster,
  posterWidth,
  posterHeight,
  posterMissing
} from '../../services/tmdb-api';
import { ToastContainer, toast } from 'react-toastify';
import { ToastOptions } from '../../services/toast-options';
import css from './HomeView.module.css';

export const HomeView = () => {
  const [movies, setMovies] = useState();
  const location = useLocation();  
  
  useEffect(() => {    
    const fetchMovies = async () => {      
      try {
        const { results } = await fetchGetTrending();
        if (!results) {
          return;
        };
        
        setMovies(results);
      } catch (error) {        
        setTimeout(() => {
          toast.error(`Something went wrong... Details: ${error.message}`, ToastOptions);
        }, 100);
      }
    };
    fetchMovies();
  }, [movies]);  
  
  return (
    <>
      {movies && (
        <div className={css.TitleBox}>
          <h1 className={css.Title}>Trending Movies</h1>          
        </div>        
      )}      

      <div className={css.Container}>
        {movies && (
          <ul className={css.MoviesList}>
            {movies.map(({ id, title, poster_path }) => (            
                <li className={css.MoviesListItem} key={id}>                
                  <Link                    
                    key={id}
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
                      height={posterHeight}
                    />                    
                    <h3 className={css.MoviesListItemTitle}>{title}</h3>                    
                  </Link>                
                </li>            
            ))}
          </ul>
        )}
      </div>

      <ToastContainer />
    </>
  );
};