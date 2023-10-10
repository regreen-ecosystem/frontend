import { TextField, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles<{ minWidth: string }>()((theme, { minWidth }) => ({
  root: {},
  heading: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: '400',
    marginBottom: '0.5rem',
  },
  textField: {
    'backgroundColor': theme.palette.grey[200],
    'minWidth': minWidth,
    'borderRadius': '5px',
    'textDecoration': 'none',
    'border': 'none',
    '*': {
      borderWidth: '0px',
      fontSize: theme.typography.body1.fontSize,
    },
  },
}));

const CustomTextInput: React.FC<{
  title: string;
  minWidth: string;
  placeholder: string;
  name: string;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string;
  type?: string;
  disabled?: boolean;
}> = ({
  title,
  minWidth,
  placeholder,
  name,
  multiline,
  rows,
  defaultValue,
  type,
  disabled,
}) => {
  const { classes } = useStyles({ minWidth: minWidth });
  return (
    <div>
      <Typography className={classes.heading}>{title}</Typography>
      <TextField
        variant='outlined'
        size='small'
        className={classes.textField}
        placeholder={placeholder}
        name={name}
        multiline={multiline}
        rows={rows}
        defaultValue={defaultValue}
        type={type ?? 'text'}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomTextInput;
