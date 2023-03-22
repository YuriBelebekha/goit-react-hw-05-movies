import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (    
    <nav className={css.AppNav}>      
      <NavLink to='/' className={css.AppNavLink}>
        Home
      </NavLink>
      
      <NavLink to='/movies' className={css.AppNavLink}>
        Movies
      </NavLink>
    </nav>
  );
};