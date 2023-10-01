import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../containers/Login';
import Root from '../containers/Admin/Root';
import Pending from '../containers/Admin/Pending';
import Matched from '../containers/Admin/Matched';
import PIBO from '../containers/Admin/PIBO';
import PWP from '../containers/Admin/PWP';
import Dashboard from '../containers/Admin/Dashboard';

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <Root />,
    children: [
      {
        path: '/admin/',
        element: <Dashboard />,
      },
      {
        path: '/admin/pibo',
        element: <PIBO />,
      },
      {
        path: '/admin/pwp',
        element: <PWP />,
      },
      {
        path: '/admin/pending',
        element: <Pending />,
      },
      {
        path: '/admin/matched',
        element: <Matched />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'pibo',
    element: <></>,
  },
  {
    path: 'pwp',
    element: <></>,
  },
]);

export default router;
