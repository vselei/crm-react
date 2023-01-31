import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';

import Index, { loader as clientsLoader } from '../pages';
import NewClient, { action as newClientAction } from '../pages/new-client';
import ErrorPage from '../pages/error-page';
import EditClient, {
  loader as editClientLoader,
  action as editClientAction
} from '../pages/edit-client';
import { action as clientAction } from '../components/Client';

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
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/:clientId/edit',
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/:clientId/destroy',
        action: clientAction
      }
    ]
  }
]);

export default router;
