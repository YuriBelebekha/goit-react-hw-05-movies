import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (    
    <nav className={css.Nav}>      
      <NavLink     
        exact 
        to='/'  
        className={css.NavLink}
        activeClassName={css.activeNavLink}               
      >
        Home
      </NavLink>
      
      <NavLink    
        exact    
        to='/movies'
        className={css.NavLink}
        activeClassName={css.activeNavLink}
      >
        Movies
      </NavLink>       
    </nav>    
  );
};