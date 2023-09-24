import React from 'react';
import { Button, TableCell, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ColumnDetails, ColumnType } from './types/CustomTableProps';
import { ReactComponent as User } from '../../assets/images/user.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles()((theme) => ({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  nameContainer: {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    ' svg': {
      scale: '0.8',
    },
    'gap': '0.5rem',
  },
  nameBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  below: {
    color: theme.palette.text.secondary,
    fontWeight: 200,
    fontSize: '0.8rem',
  },
  buttonView: {
    color: theme.palette.text.primary,
    border: '1.5px solid ' + theme.palette.primary.dark,
    fontWeight: 'normal',
    borderRadius: '12px',
    minWidth: '100px',
    padding: '0.2rem 0.5rem',
  },
  above: {
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: theme.typography.subtitle1.fontSize,
  },
  cell: {
    padding: '6px',
  },
  text: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.text.secondary,
    fontWeight: 300,
  },
  accordianContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.1rem',
    justifyContent: 'center',
  },
  accordianIcon: {
    fill: theme.palette.grey[500],
    // scale: '1.5',
    fontSize: 'medium',
    fontWeight: 200,
  },
}));

const CustomCell: React.FC<{
  row: any;
  column: ColumnDetails;
  onClick?: () => void;
}> = ({ row, column, onClick }) => {
  const { classes } = useStyles();
  return (
    <TableCell key={column.field} className={classes.cell}>
      <>
        {column.type === ColumnType.NAME ? (
          <div className={classes.nameContainer}>
            <User scale={0.6} />
            <div className={classes.nameBody}>
              <Typography className={classes.above}>
                {row[column.field]}
              </Typography>
              <Typography variant='body2' className={classes.below}>
                {row[column.field + '1']}
              </Typography>
            </div>
          </div>
        ) : null}
        {column.type === ColumnType.TEXT ? (
          <Typography className={classes.text}>{row[column.field]}</Typography>
        ) : null}
        {column.type === ColumnType.DETAILS ? (
          <DetailsView
            main={row[column.field]}
            secondary={row[column.field + '1']}
          />
        ) : null}
        {column.type === ColumnType.BUTTON ? (
          <ButtonView onClick={onClick} title={row[column.field]} />
        ) : null}
        {column.type === ColumnType.DATE ? (
          <DateTimeView date={row[column.field]} />
        ) : null}
        {column.type === ColumnType.NUMBER ? (
          <NumberView number={row[column.field]} />
        ) : null}
        {column.type === ColumnType.ACCORDIAN ? (
          <AccordianView
            title={row[column.field]}
            onClick={() => {
              return;
            }}
          />
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
      <Typography className={classes.above}>{main}</Typography>
      <Typography variant='body2' className={classes.below}>
        {secondary}
      </Typography>
    </div>
  );
};

const AccordianView: React.FC<{
  title: string;
  onClick: () => void;
}> = ({ title, onClick }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.accordianContainer} onClick={onClick}>
      <KeyboardArrowDownIcon className={classes.accordianIcon} />
      <Typography className={classes.text}>{title}</Typography>
    </div>
  );
};

const DateTimeView: React.FC<{ date: Date }> = ({ date }) => {
  const { classes } = useStyles();
  return <Typography className={classes.text}>{date.toISOString()}</Typography>;
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

const NumberView: React.FC<{ number: number }> = ({ number }) => {
  const { classes } = useStyles();
  return <Typography className={classes.text}>{number}</Typography>;
};

export default CustomCell;
