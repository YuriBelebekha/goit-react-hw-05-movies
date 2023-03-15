import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (    
    <nav className={css.Nav}>      
      <NavLink to='/' className={css.NavLink}>
        Home
      </NavLink>
      
      <NavLink to='/movies' className={css.NavLink}>
        Movies
      </NavLink>
    </nav>
  );
};