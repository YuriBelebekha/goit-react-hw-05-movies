import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCredits, baseApiUrlForPoster, profilePhotoMissing, posterWidth } from '../../services/tmdb-api';
// import css from './Cast.module.css';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    movieId &&
      fetchGetMovieCredits(movieId)
      .then(({ cast }) => {
          console.log(cast)
          setCredits(cast);          
        })    
  }, [movieId]);  
  
  return (
    <>
      {credits && (
        <ul>
          {credits.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={profile_path
                    ? `${baseApiUrlForPoster}${profile_path}`
                    : profilePhotoMissing}
                  alt={name}
                  width={posterWidth / 1.2}
                />

                <div>
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
};