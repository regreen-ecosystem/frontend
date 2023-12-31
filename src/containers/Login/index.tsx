import { Button, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Form } from 'react-router-dom';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 2rem',
    alignContent: 'center',
    justifyContent: 'flex-start',
    width: '40vw',
    height: '100vh',
    backgroundColor: theme.palette.common.white,
    flexWrap: 'wrap',
    paddingTop: '5rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    // padding: '4rem 0px',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '20px',
    boxShadow: '0px 20px 80px 0px rgba(35, 35, 35, 0.15)',
    width: '26vw',
    flexWrap: 'wrap',
    aspectRatio: '8/9',
  },
  heading: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: '400',
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
  forgotLink: {
    color: theme.palette.text.primary,
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginTop: '0.5rem',
    textDecoration: 'none',
  },
}));

const Login: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <div className={classes.titleContainer}>
        <Typography variant='h6' style={{ fontWeight: '400' }}>
          {'Welcome Back to '}
          <Typography variant='h6' className={classes.decoratedTitle}>
            {'Regreen Ecosystem'}
          </Typography>
        </Typography>
      </div>
      <Form method='POST' className={classes.container}>
        <Typography className={classes.title}>Login</Typography>
        <Typography className={classes.heading}>Email</Typography>
        <TextField
          id='outlined-basic'
          variant='outlined'
          size='small'
          style={{ marginBottom: '0.7rem', width: '80%' }}
          placeholder='Email'
          type='email'
          name='email'
        />
        <Typography className={classes.heading}>Password</Typography>
        <TextField
          id='outlined-basic'
          variant='outlined'
          size='small'
          placeholder='Password'
          type='password'
          name='password'
          style={{ width: '80%' }}
        />
        <Link href='/forgot-password' className={classes.forgotLink}>
          Forgot Password?
        </Link>
        <Button className={classes.button} type='submit'>
          {'Login'}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
