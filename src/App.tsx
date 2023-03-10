import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import ArtistPage from './pages/ArtistPage';
import PlaylistPage from './pages/PlaylistPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'browse',
    element: <BrowsePage />,
  },
  {
    path: 'artist',
    element: <ArtistPage />,
  },
  {
    path: 'playlist',
    element: <PlaylistPage />,
  },
  {
    path: '*',
    element: <>nie ma takiej dupy</>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
