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
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/pibo',
        element: <PIBO />,
      },
      {
        path: '/pwp',
        element: <PWP />,
      },
      {
        path: '/pending',
        element: <Pending />,
      },
      {
        path: '/matched',
        element: <Matched />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
