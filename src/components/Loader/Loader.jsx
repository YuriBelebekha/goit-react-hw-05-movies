import { Vortex } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <Vortex
        height='35'
        width='35'
        colors={['black', 'yellow', 'black', 'yellow', 'yellow', 'black']}
      />
    </div>
  )
};