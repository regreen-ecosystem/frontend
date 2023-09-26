import { Button, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 2rem',
    alignContent: 'center',
    justifyContent: 'center',
    width: '50vw',
    height: '100vh',
    backgroundColor: theme.palette.common.white,
    flexWrap: 'wrap',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '4rem 0px',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '20px',
    boxShadow: '0px 20px 80px 0px rgba(35, 35, 35, 0.15)',
    width: '60%',
    flexWrap: 'wrap',
  },
  heading: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: '300',
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: '500',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: '400',
    borderRadius: '20px',
    padding: '0.5rem 0',
    width: '80%',
    margin: '1rem 0 1rem 0 ',
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  decoratedTitle: {
    color: theme.palette.secondary.main,
    fontWeight: '500',
    display: 'inline',
  },
  link: {
    color: theme.palette.secondary.main,
    marginLeft: '0.2rem',
    textDecorationColor: theme.palette.secondary.main,
  },
  forgotLink: {
    color: theme.palette.text.primary,
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginTop: '0.5rem',
  },
}));

const Login: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <div className={classes.titleContainer}>
        <Typography variant='h5'>
          {'Welcome Back to '}
          <Typography variant='h5' className={classes.decoratedTitle}>
            {'Regreen Ecosystem'}
          </Typography>
        </Typography>
      </div>
      <div className={classes.container}>
        <Typography className={classes.title}>Log In</Typography>
        <Typography className={classes.heading}>Email</Typography>
        <TextField
          id='outlined-basic'
          variant='outlined'
          size='small'
          style={{ marginBottom: '0.5rem', width: '80%' }}
          placeholder='Email'
        />
        <Typography className={classes.heading}>Password</Typography>
        <TextField
          id='outlined-basic'
          variant='outlined'
          size='small'
          placeholder='Password'
          type='password'
          style={{ width: '80%' }}
        />
        <Link href='/forgot-password' className={classes.forgotLink}>
          Forgot Password?
        </Link>
        <Button className={classes.button}>{'Log In'}</Button>
        <Typography
          variant='body1'
          style={{ fontWeight: 200, textAlign: 'center' }}
        >
          Don&#39;t have an account?{' '}
          <Link href='/signup' className={classes.link}>
            Sign Up
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
