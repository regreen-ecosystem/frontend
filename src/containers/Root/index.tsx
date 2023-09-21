import React from 'react';
import ResponsiveNavBar from '../../components/NavBar';
import { Outlet } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <>
      <ResponsiveNavBar />
      <Outlet />
    </>
  );
};

export default Root;
