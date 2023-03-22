import { Link } from 'react-router-dom';
import css from './NotFoundView.module.css';

export const NotFoundView = () => {
  return (   
    <>
      <Link to='/'>Go back</Link>
      <h1 className={css.ErrorMessage}>
        Something went wrong... Please try again later      
      </h1>
    </>
  );
};