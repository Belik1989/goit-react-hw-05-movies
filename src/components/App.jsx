import { NotFound } from 'pages/NotFound';
import { Layout } from '../Layout';
import { Route, Routes } from 'react-router-dom';
import { paths } from 'router/paths';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={paths.movies} element={<Movies />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
