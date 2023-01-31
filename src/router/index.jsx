import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';

import Index, { loader as clientsLoader } from '../pages';
import NewClient, { action as newClientAction } from '../pages/new-client';

import ErrorPage from '../pages/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: newClientAction
      }
    ]
  }
]);

export default router;
