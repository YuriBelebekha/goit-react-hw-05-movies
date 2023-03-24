import { Vortex } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <Vortex
        height='45'
        width='45'
        colors={['black', 'yellow', 'black', 'yellow', 'yellow', 'black']}
      />
    </div>
  )
};