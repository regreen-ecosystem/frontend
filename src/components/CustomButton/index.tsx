import { Button, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

// Make the useStyles accept a minWidth prop
const useStyles = makeStyles<{ minWidth: string }>()((theme, { minWidth }) => ({
  container: {
    'borderColor': theme.palette.grey[500],
    'borderWidth': '2px',
    '&:hover': {
      borderColor: theme.palette.primary.dark,
    },
    'borderRadius': '0.5rem',
    'fontSize': theme.typography.body2.fontSize,
    'gap': '0.5rem',
    'minWidth': minWidth,
  },
  text: {
    color: theme.palette.grey[500],
    textTransform: 'none',
    fontSize: theme.typography.body1.fontSize,
  },
  icon: {
    fontSize: 'large',
    color: theme.palette.grey[500],
  },
}));

const CustomButton: React.FC<{
  title: string;
  minWidth: string;
  onClick: () => void;
  children?: React.ReactNode;
}> = ({ title, minWidth, onClick, children }) => {
  const { classes } = useStyles({ minWidth: minWidth });
  return (
    <Button
      variant='outlined'
      className={classes.container}
      onClick={onClick}
      size='medium'
    >
      {children}
      <Typography className={classes.text}>{title}</Typography>
    </Button>
  );
};

export default CustomButton;
