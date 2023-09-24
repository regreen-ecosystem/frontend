import React from 'react';
import { Button, TableCell, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ColumnDetails, ColumnType } from './types/CustomTableProps';
import { ReactComponent as User } from '../../assets/images/user.svg';

const useStyles = makeStyles()((theme) => ({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  below: {
    color: theme.palette.text.disabled,
  },
  buttonView: {
    color: theme.palette.text.primary,
    border: '1.5px solid ' + theme.palette.primary.dark,
    fontWeight: 'normal',
    borderRadius: '12px',
    minWidth: '100px',
    padding: '0.2rem 0.5rem',
  },
}));

const CustomCell: React.FC<{
  row: any;
  column: ColumnDetails;
  onClick?: () => void;
}> = ({ row, column, onClick }) => {
  const { classes } = useStyles();
  return (
    <TableCell key={column.field}>
      <>
        {column.type === ColumnType.NAME ? (
          <div className={classes.nameContainer}>
            <User />
            <div className={classes.nameBody}>
              <Typography>{row[column.field]}</Typography>
              <Typography variant='body2' className={classes.below}>
                {row[column.field + '1']}
              </Typography>
            </div>
          </div>
        ) : null}
        {column.type === ColumnType.TEXT ? row[column.field] : null}
        {column.type === ColumnType.DETAILS ? (
          <DetailsView
            main={row[column.field]}
            secondary={row[column.field + '1']}
          />
        ) : null}
        {column.type === ColumnType.BUTTON ? (
          <ButtonView onClick={onClick} title={row[column.field]} />
        ) : null}
      </>
    </TableCell>
  );
};

const DetailsView: React.FC<{ main: string; secondary: string }> = ({
  main,
  secondary,
}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.detailsContainer}>
      <Typography>{main}</Typography>
      <Typography variant='body2' className={classes.below}>
        {secondary}
      </Typography>
    </div>
  );
};

const ButtonView: React.FC<{ onClick?: () => void; title: string }> = ({
  onClick,
  title,
}) => {
  const { classes } = useStyles();
  return (
    <Button className={classes.buttonView} onClick={onClick}>
      {title}
    </Button>
  );
};

export default CustomCell;
