import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Root from '../containers/Root';
import Pending from '../containers/Pending';
import Matched from '../containers/Matched';
import PIBO from '../containers/PIBO';
import PWP from '../containers/PWP';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
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
