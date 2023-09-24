import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { SearchBarProps } from './types/SearchBarProps';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const useStyles = makeStyles()((theme) => ({
  root: {
    'width': '250px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.grey[500],
        borderWidth: '2px',
        borderRadius: '0.5rem',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.dark,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.dark,
      },
      '& .MuiOutlinedInput-input': {
        color: theme.palette.text.disabled,
      },
    },
    ' input': {
      fontSize: theme.typography.body1.fontSize,
    },
  },
}));

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  const { classes } = useStyles();

  return (
    <TextField
      className={classes.root}
      variant='outlined'
      size='small'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value.toLowerCase());
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Search fontSize='small' />
          </InputAdornment>
        ),
      }}
      placeholder='Search'
      margin='none'
    />
  );
};

export default SearchBar;
