import { Button, Checkbox, Link, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Heading from './Heading';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    alignContent: 'center',
    flexWrap: 'wrap',
    height: '100vh',
  },

  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
}));

const Login: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Heading />
      <Typography variant='h6' style={{ fontWeight: 400 }}>
        Email
      </Typography>
      <TextField
        id='outlined-basic'
        variant='outlined'
        size='small'
        style={{ marginBottom: '0.5rem' }}
      />
      <Typography variant='h6' style={{ fontWeight: 400 }}>
        Password
      </Typography>
      <TextField id='outlined-basic' variant='outlined' size='small' />
      <div
        className={classes.box}
        style={{ justifyContent: 'space-between', marginBottom: '1rem' }}
      >
        <div className={classes.box}>
          <Checkbox size='small' />
          <Typography variant='body1' style={{ fontWeight: 200 }}>
            Remember me
          </Typography>
        </div>
        <Link href='/forgot-password'>forgot password?</Link>
      </div>
      <Button variant='contained' style={{ marginBottom: '0.8rem' }}>
        Sign In
      </Button>
      <Button variant='outlined' style={{ marginBottom: '0.8rem' }}>
        Sign In with Google
      </Button>
      <Typography
        variant='body1'
        style={{ fontWeight: 200, textAlign: 'center' }}
      >
        Don&#39;t have an account? <Link href='/signup'>Sign Up</Link>
      </Typography>
    </div>
  );
};

export default Login;
