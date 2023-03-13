import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import ArtistPage from './pages/ArtistPage';
import PlaylistPage from './pages/PlaylistPage';
import AlbumPage from './pages/AlbumPage';
import ErrorPage from './pages/ErrorPage';
import Loader from './pages/Loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: Loader,
  },
  {
    path: 'browse',
    element: <BrowsePage />,
    errorElement: <ErrorPage />,
    loader: Loader,
  },
  {
    path: 'artist/:id',
    element: <ArtistPage />,
    errorElement: <ErrorPage />,
    loader: Loader,
  },
  {
    path: 'playlist/:id',
    element: <PlaylistPage />,
    errorElement: <ErrorPage />,
    loader: Loader,
  },
  {
    path: '/album/:id',
    element: <AlbumPage />,
    errorElement: <ErrorPage />,
    loader: Loader,
  },
  {
    path: '*',
    element: <>No page found</>,
    errorElement: <ErrorPage />,
    loader: Loader,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
