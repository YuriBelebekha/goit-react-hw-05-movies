import { Routes, Route } from 'react-router-dom';
import { createAsyncView, createAsyncComponent } from 'helpers';

const Layout = createAsyncComponent('Layout');
const MovieDetails = createAsyncComponent('MovieDetails');
const Cast = createAsyncComponent('Cast');
const Reviews = createAsyncComponent('Reviews');

const HomeView = createAsyncView('HomeView');
const MoviesView = createAsyncView('MoviesView');
const NotFoundView = createAsyncView('NotFoundView');

export const App = () => {
  return (    
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path='/movies' element={<MoviesView />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
