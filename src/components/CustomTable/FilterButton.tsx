import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    'color': theme.palette.text.disabled,
    'borderColor': theme.palette.primary.light,
    'borderWidth': '2px',
    '&:hover': {
      borderColor: theme.palette.primary.dark,
    },
    'borderRadius': '0.5rem',
  },
}));

const FilterButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { classes } = useStyles();
  return (
    <Button
      onClick={onClick}
      className={classes.root}
      variant='outlined'
      size='medium'
    >
      {'Filter'}
    </Button>
  );
};

export default FilterButton;
