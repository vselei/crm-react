import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';

import Index from '../pages';
import NewClient from '../pages/new-client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/clients/new',
        element: <NewClient />
      }
    ]
  }
]);

export default router;
