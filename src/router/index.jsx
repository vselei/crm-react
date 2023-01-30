import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';

import Index, { loader as clientsLoader } from '../pages';
import NewClient from '../pages/new-client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader
      },
      {
        path: '/clients/new',
        element: <NewClient />
      }
    ]
  }
]);

export default router;
