import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import {
  fetchSearchMovies,
  baseApiUrlForPoster,
  posterWidth,
  posterMissing,
  posterHeight
} from '../../services/tmdb-api';
import { ToastContainer, toast } from 'react-toastify';
import { ToastOptions } from '../../services/toast-options';
import css from './MoviesView.module.css';

export const MoviesView = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  const location = useLocation();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    searchQuery &&
      fetchSearchMovies(searchQuery)
        .then(({ results, total_results }) => {
          if (total_results === 0) {
            setTimeout(() => {
              toast.warning('Sorry, there are no movies matching your search query', ToastOptions);
            }, 100);
            return;   
          }

          setMovies(results);

          setTimeout(() => {
            toast.success(`Total found ${total_results} movies`, ToastOptions);
          }, 100);
        })               
  }, [searchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();    

    fetchSearchMovies(searchQuery)
      .then(() => {
        if (query === '') {
          setTimeout(() => {
            toast.info('Your query is empty, please enter movie title to search', ToastOptions);
          }, 100);      
        };
      })
      .catch(error => {
        setTimeout(() => {
          toast.error(`Something went wrong... Details: ${error.message}`, ToastOptions);
        }, 100);        
        return;
      })    

    setMovies(await fetchSearchMovies(query));    
    setSearchParams({ query });
    setQuery('');
  };

  const onChange = e => {
    setQuery(e.target.value);    
  };

  return (
    <>
      <div className={css.Container}>
        <form onSubmit={handleSubmit}>
          <input
            className={css.SearchMoviesInput}
            type='text'
            value={query}
            onChange={onChange}
          />
          <button
            className={css.SearchMoviesInputBtn}
            type='submit'
          >
            Search
          </button>
        </form>
        
        {movies.length > 0 && (
          <ul className={css.MoviesList}>
            {movies.map(({ id, title, poster_path }) => (
              <li className={css.MoviesListItem} key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
                  <img
                    className={css.MovieListItemImg}
                    src={poster_path
                      ? `${baseApiUrlForPoster}${poster_path}`
                      : posterMissing}
                    alt={title}
                    height={posterHeight}
                    width={posterWidth}
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
  )
};