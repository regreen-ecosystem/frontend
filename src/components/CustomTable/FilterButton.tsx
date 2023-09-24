import React from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import TuneIcon from '@mui/icons-material/Tune';
import { Tune } from '@mui/icons-material';

const useStyles = makeStyles()((theme) => ({
  root: {
    'borderColor': theme.palette.grey[500],
    'borderWidth': '2px',
    '&:hover': {
      borderColor: theme.palette.primary.dark,
    },
    'borderRadius': '0.5rem',
    'fontSize': theme.typography.body2.fontSize,
    'gap': '0.5rem',
    // 'minHeight': 'max-content',
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

const FilterButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { classes } = useStyles();
  return (
    <Button
      onClick={onClick}
      className={classes.root}
      variant='outlined'
      size='medium'
    >
      <TuneIcon className={classes.icon} />
      <Typography className={classes.text}>{'Filter'}</Typography>
    </Button>
  );
};

export default FilterButton;
