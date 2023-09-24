import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/regreen-ecosystem-logo.svg';
import { makeStyles } from 'tss-react/mui';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: 'transparent',
    maxHeight: '12vh',
    boxShadow: 'none',
    zIndex: 4,
  },
  logo: {
    maxHeight: '12vh',
  },
  container: {
    'padding': '0px 20px 0px 0px  !important',
    ' a': {
      color: theme.palette.text.primary,
      marginRight: '1.6rem',
      textDecoration: 'none',
      lineHeight: '1rem',
      fontWeight: '400',
    },
  },
  activeNav: {
    textDecoration: 'underline !important',
    textDecorationColor: theme.palette.text.primary + '!important',
    textDecorationThickness: '2px !important',
    textUnderlineOffset: '10px',
  },
  pendingNav: {},
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    padding: '0.7rem',
    gap: '0.3rem',
    color: theme.palette.common.white,
  },
  buttonText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buttonHeading: {
    fontSize: '0.8rem',
  },
  buttonTitle: {
    fontSize: '0.6rem',
  },
  down: {
    fill: theme.palette.common.white,
  },
}));

const pages = ['Dashbaord', 'PIBOs', 'PWPs', 'Pending', 'Matched'];
const routes = ['/', '/pibo', '/pwp', '/pending', '/matched'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveNavBar: React.FC = () => {
  const { classes } = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Container maxWidth='xl' className={classes.container}>
        <Toolbar disableGutters>
          <Logo className={classes.logo} />
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'end',
              marginRight: '3rem',
            }}
          >
            {pages.map((page, index) => (
              <NavLink
                to={routes[index]}
                key={page}
                className={({ isActive, isPending }) =>
                  isActive
                    ? classes.activeNav
                    : isPending
                    ? classes.pendingNav
                    : ''
                }
              >
                {page}
              </NavLink>
            ))}
          </Box>
          <Box>
            <Tooltip title='Settings'>
              <Button>
                <div className={classes.buttonContainer}>
                  <AccountCircleOutlinedIcon />
                  <div className={classes.buttonText}>
                    <Typography className={classes.buttonHeading}>
                      {'Alexander'}
                    </Typography>
                    <Typography className={classes.buttonTitle}>
                      {'Admin'}
                    </Typography>
                  </div>
                  <KeyboardArrowDownIcon className={classes.down} />
                </div>
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveNavBar;
