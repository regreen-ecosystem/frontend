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
import { createPIBO, createPWP } from '../commons/types';
import PWPDetailsPage from '../containers/Admin/PWP/PWPDetailsPage';
import { getUserLoggedIn, login } from '../services/auth';
import {
  createPIBOData,
  deletePIBOData,
  getPIBOData,
  getPIBOTableData,
  updatePIBOData,
} from '../services/pibo';
import {
  createPWPData,
  deletePWPData,
  getPWPData,
  getPWPTableData,
  updatePWPData,
} from '../services/pwp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: getUserLoggedIn,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/pibo',
        loader: getPIBOTableData,
        element: <PIBO />,
      },
      {
        path: '/pwp',
        loader: getPWPTableData,
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
    action: login,
  },
  {
    path: '/pibo',
    children: [
      {
        path: '/pibo/add',
        element: <PIBODetailsPage title='New Registration' />,
        loader: createPIBO,
        action: createPIBOData,
      },
      {
        path: '/pibo/:id/edit',
        element: <PIBODetailsPage title='Edit PIBO Details' />,
        loader: getPIBOData,
        action: updatePIBOData,
      },
      {
        path: '/pibo/:id/delete',
        loader: deletePIBOData,
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
        action: createPWPData,
      },
      {
        path: '/pwp/:id/edit',
        element: <PWPDetailsPage title='Edit PWP Details' />,
        loader: getPWPData,
        action: updatePWPData,
      },
      {
        path: '/pwp/:id/delete',
        loader: deletePWPData,
      },
    ],
  },
]);

export default router;
