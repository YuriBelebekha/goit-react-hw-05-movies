import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { HomeView } from '../views/HomeView';
import { MoviesView } from '../views/MoviesView';
import { MovieDetails } from 'components/MovieDetails';

import { NotFoundView } from '../views/NotFoundView';

export const App = () => {
  return (    
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path='/movies' element={<MoviesView />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}></Route>
        <Route path='*' element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
