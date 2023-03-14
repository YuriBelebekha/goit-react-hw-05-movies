import { Navigation } from 'components/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div className={css.Container}>
      <Navigation />
    </div>
  );
};