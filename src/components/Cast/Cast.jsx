import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchGetMovieCredits,
  baseApiUrlForPoster,
  profilePhotoMissing,
  posterWidth,
  posterHeight,
} from '../../services/tmdb-api';
import { Loader } from '../Loader/Loader';
import css from './Cast.module.css';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams('movieId');  

  useEffect(() => {    
    movieId &&
      fetchGetMovieCredits(movieId)
        .then(({ cast }) => { 
          setIsLoading(false);
          setCredits(cast);
        })
        .catch((error) => console.log(error.message))
        .finally(
          setIsLoading(true)
        )
  }, [movieId]);
  
  return (
    <>
      {isLoading && <Loader />}
      {credits.length > 0 ? (
        <ul className={css.ProfileList}>          
          {credits.map(({ id, profile_path, name, character }) => {
            return (
              <li className={css.ProfileListItem} key={id}>
                <img
                  className={css.ProfileListImg}
                  src={profile_path
                    ? `${baseApiUrlForPoster}${profile_path}`
                    : profilePhotoMissing}
                  alt={name}
                  width={posterWidth}
                  height={posterHeight}
                />

                <div className={css.ProfileThumb}>
                  <h3
                    className={css.ProfileThumbName}
                  >
                    {name}
                  </h3>
                  <p
                    className={css.ProfileThumbCharacter}
                  >                    
                    Character: {character}
                  </p>
                </div>
              </li>              
            )
          })}
        </ul>
      ) : (<b>Sorry, there is no cast list for this movie</b>)}      
    </>
  )
};