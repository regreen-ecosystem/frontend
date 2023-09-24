import React from 'react';
import ResponsiveNavBar from '../../components/NavBar';
import { Outlet } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  backgroundDiv: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    minHeight: '40vh',
    position: 'absolute',
    top: '0px',
    zIndex: -1,
  },
}));

const Root: React.FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <ResponsiveNavBar />
      <div className={classes.backgroundDiv} />
      <Outlet />
    </>
  );
};

export default Root;
