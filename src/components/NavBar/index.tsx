import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/company-logo.svg';
import { makeStyles } from 'tss-react/mui';
import { NavLink, Form } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { getCookie } from 'typescript-cookie';

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
    textDecorationThickness: '3px !important',
    textUnderlineOffset: '10px',
    fontSize: theme.typography.h6.fontSize,
  },
  pendingNav: { fontSize: theme.typography.h6.fontSize },
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
  nav: {
    fontSize: theme.typography.h6.fontSize,
  },
  icon: {
    fontSize: 'large',
    color: theme.palette.primary.main,
    marginRight: '0.5rem',
  },
  menuText: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  popover: {
    borderRadius: '10px',
  },
}));

const pages = ['Dashboard', 'PIBOs', 'PWPs', 'Pending', 'Matched'];
const routes = ['/', '/pibo', '/pwp', '/pending', '/matched'];

const ResponsiveNavBar: React.FC = () => {
  const { classes } = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                    : classes.nav
                }
              >
                {page}
              </NavLink>
            ))}
          </Box>
          <Box>
            <Tooltip title='Settings'>
              <Button onClick={handleMenu}>
                <div className={classes.buttonContainer}>
                  <AccountCircleOutlinedIcon />
                  <div className={classes.buttonText}>
                    <Typography className={classes.buttonHeading}>
                      {getCookie('username')}
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
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PopoverClasses={{ paper: classes.popover }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Form action='/add-manager'>
              <Button onClick={handleClose} type='button'>
                <AddCircleOutlineOutlinedIcon className={classes.icon} />
                <Typography className={classes.menuText}>
                  {'Add Manager'}
                </Typography>
              </Button>
            </Form>
            <Form action='/settings'>
              <Button onClick={handleClose} type='button'>
                <SettingsOutlinedIcon className={classes.icon} />
                <Typography className={classes.menuText}>
                  {'Settings'}
                </Typography>
              </Button>
            </Form>
            <Form action='/logout'>
              <Button onClick={handleClose} type='submit'>
                <ExitToAppIcon className={classes.icon} />
                <Typography className={classes.menuText}>{'Logout'}</Typography>
              </Button>
            </Form>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveNavBar;
