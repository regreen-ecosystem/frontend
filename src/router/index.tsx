import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../containers/Login';
import Root from '../containers/Admin/Root';
import Pending from '../containers/Admin/Pending';
import Matched from '../containers/Admin/Matched';
import PIBO from '../containers/Admin/PIBO';
import PWP from '../containers/Admin/PWP';
import Dashboard from '../containers/Admin/Dashboard';
import PIBODetailsPage from '../containers/Admin/PIBO/PIBODetailsPage';
import {
  createPIBO,
  createPIBOData,
  createPWP,
  createPWPData,
  editPIBOData,
} from '../commons/types';
import PWPDetailsPage from '../containers/Admin/PWP/PWPDetailsPage';

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
  {
    path: '/pibo',
    children: [
      {
        path: '/pibo/add',
        element: <PIBODetailsPage title='New Registration' />,
        loader: createPIBO,
        action: editPIBOData,
      },
      {
        path: '/pibo/:id/edit',
        element: <PIBODetailsPage title='Edit PIBO Details' />,
        loader: createPIBOData,
        action: editPIBOData,
      },
    ],
  },
  {
    path: '/pwp',
    children: [
      {
        path: '/pwp/add',
        element: <PWPDetailsPage title='New registration' />,
        loader: createPWP,
        action: editPIBOData,
      },
      {
        path: '/pwp/:id/edit',
        element: <PWPDetailsPage title='Edit PWP Details' />,
        loader: createPWPData,
        action: editPIBOData,
      },
    ],
  },
]);

export default router;
