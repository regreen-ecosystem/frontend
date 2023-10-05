import { Button, Divider, Typography, Badge } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import AddIcon from '@mui/icons-material/Add';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Form } from 'react-router-dom';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    height: '10vh',
    width: 'auto',
    margin: '10px 4% 0 4%',
    borderRadius: '0.5rem',
    boxShadow: '0px 20px 80px 0px rgba(35, 35, 35, 0.15)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: theme.palette.grey[500],
    fontSize: '1rem !important',
    margin: 'auto 1rem',
    fontWeight: '400',
    textTransform: 'none',
  },
  icon: {
    fontSize: 'large',
    scale: '1.2',
    color: theme.palette.grey[500],
  },
  button: {
    margin: '15px 1rem 15px 0',
    borderRadius: '0.5rem',
  },
  divider: {
    height: 'auto',
    margin: '10px 10px 10px 20px',
    backgroundColor: theme.palette.grey[300],
    width: '1px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  iconA: {
    fontSize: 'large',
    scale: '2',
    color: theme.palette.grey[500],
  },
  badge: {
    'scale': '0.8',
    '.MuiBadge-badge': {
      top: '2px',
    },
    // color: 'primary',
  },
}));

const RegistrationBar: React.FC<{
  content: number;
}> = ({ content }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>{'Registrations'}</Typography>
      <div className={classes.container}>
        <Badge
          className={classes.badge}
          badgeContent={content}
          color='primary'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          //   overlap='circular'
        >
          <DescriptionOutlinedIcon className={classes.iconA} />
        </Badge>
        <Divider orientation='vertical' flexItem className={classes.divider} />
        <Form action='add'>
          <Button className={classes.button} type='submit'>
            <AddIcon className={classes.icon} />
            <Typography
              className={classes.text}
              style={{ margin: 'auto 1rem auto 5px' }}
            >
              {'Add New'}
            </Typography>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationBar;
