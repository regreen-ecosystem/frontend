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
import PWPDetailsPage from '../containers/Admin/PWP/PWPDetailsPage';
import { getUserLoggedIn, login, logout } from '../services/auth';
import {
  createPIBOData,
  deletePIBOData,
  getPIBOData,
  getPIBOTableData,
  updatePIBOData,
  createPIBO,
} from '../services/pibo';
import {
  createPWPData,
  deletePWPData,
  getPWPData,
  getPWPTableData,
  updatePWPData,
  createPWP,
} from '../services/pwp';
import {
  createMatch,
  createRequest,
  getMatches,
  getPendingData,
  getPendingTableData,
  // getMatches,
  // createMatch,
  insertRequest,
  updateRequest,
} from '../services/pending';
import {
  getIndividualMatchedData,
  getMatchedData,
  updateMatchedStatus,
} from '../services/matched';
import RequestDetailsPage from '../containers/Admin/PIBO/RequestDetailsPage';
import { createCredit, insertCredit, updateCredit } from '../services/credit';
import CreditDetailsPage from '../containers/Admin/PWP/CreditDetailsPage';
import Matching from '../containers/Admin/Matching';
import MatchedDetailsPage from '../containers/Admin/Matched/MatchedDetailsPage';

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
        loader: getPendingTableData,
      },
      {
        path: '/pending/:id/match',
        element: <Matching />,
        action: createMatch,
        loader: getMatches,
      },
      {
        path: '/matched',
        element: <Matched />,
        action: updateMatchedStatus,
        loader: getMatchedData,
      },
      {
        path: '/matched/:id/details',
        element: <MatchedDetailsPage />,
        loader: getIndividualMatchedData,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: login,
  },
  {
    path: '/logout',
    loader: logout,
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
      {
        path: '/pibo/:id/addRequest',
        loader: createRequest,
        action: insertRequest,
        element: <RequestDetailsPage title='Add New Request' />,
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
      {
        path: '/pwp/:id/addCredits',
        loader: createCredit,
        action: insertCredit,
        element: <CreditDetailsPage title='Add Credit' />,
      },
    ],
  },
  {
    path: '/pending',
    children: [
      {
        path: '/pending/:id/edit',
        element: <RequestDetailsPage title='Edit Request' />,
        loader: getPendingData,
        action: updateRequest,
      },
    ],
  },
]);

export default router;
