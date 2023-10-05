import React from 'react';
import { Button, NativeSelect, TableCell, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ColumnDetails, ColumnType } from './types/CustomTableProps';
import { ReactComponent as User } from '../../assets/images/user.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Form, useSubmit } from 'react-router-dom';

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
  statusSelect: {
    '*': {
      borderWidth: '0px !important',
      fontWeight: 500,
      color: theme.palette.text.primary,
    },
  },
}));

const CustomCell: React.FC<{
  row: any;
  column: ColumnDetails;
  statusEnum?: { [key: string]: string };
  id: string;
}> = ({ row, column, statusEnum, id }) => {
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
                {row[column.field2 as keyof typeof row]}
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
            secondary={row[column.field2 as keyof typeof row]}
          />
        ) : null}
        {column.type === ColumnType.BUTTON ? (
          <ButtonView
            title={column.title ?? row[column.field]}
            action={column.action ?? ''}
            id={id}
          />
        ) : null}
        {column.type === ColumnType.DATE ? (
          <DateTimeView date={row[column.field]} />
        ) : null}
        {column.type === ColumnType.NUMBER ? (
          <NumberView number={row[column.field]} />
        ) : null}
        {column.type === ColumnType.ACCORDIAN ? (
          <AccordianView
            title={column.title ?? row[column.field]}
            onClick={() => {
              return;
            }}
          />
        ) : null}
        {column.type === ColumnType.STATUS && statusEnum ? (
          <StatusView
            status={row[column.field]}
            statusEnum={statusEnum}
            id={id}
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

const ButtonView: React.FC<{ title: string; action: string; id: string }> = ({
  title,
  action,
  id,
}) => {
  const { classes } = useStyles();
  return (
    <Form action={id + action}>
      <Button className={classes.buttonView} type='submit'>
        {title}
      </Button>
    </Form>
  );
};

const NumberView: React.FC<{ number: number }> = ({ number }) => {
  const { classes } = useStyles();
  return <Typography className={classes.text}>{number}</Typography>;
};

const StatusView: React.FC<{
  status: string;
  statusEnum: { [key: string]: string };
  id: string;
}> = ({ status, statusEnum, id }) => {
  const submit = useSubmit();
  const { classes } = useStyles();
  return (
    <Form method='POST' id={'status-form'}>
      <NativeSelect
        className={classes.statusSelect}
        defaultValue={status}
        key={id}
        name='status'
        onChange={(event) => {
          submit(event.currentTarget.form);
        }}
      >
        {Object.keys(statusEnum).map((key) => {
          return (
            <option key={key} value={key}>
              {statusEnum[key]}
            </option>
          );
        })}
      </NativeSelect>
      <input name='id' value={id} readOnly hidden />
    </Form>
  );
};

export default CustomCell;
