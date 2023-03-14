import { NavLink } from 'react-router-dom';
import css from './NotFoundView.module.css';

export const NotFoundView = () => {
  return (   
    <>
      <NavLink to='/'>Go back</NavLink>
      <h1 className={css.ErrorMessage}>
        Something went wrong... Please try again later      
      </h1>
    </>
  );
};