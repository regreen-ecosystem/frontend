import React from 'react';
import CustomTable from '../../../components/CustomTable';
import {
  ColumnDetails,
  ColumnType,
} from '../../../components/CustomTable/types/CustomTableProps';
import { Typography } from '@mui/material';
import CustomButton from '../../../components/CustomButton';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from 'tss-react/mui';
import RegistrationBar from '../../../components/RegistrationBar';
import { useLoaderData } from 'react-router-dom';

const columnDefs: Array<ColumnDetails> = [
  {
    label: 'Company Name',
    type: ColumnType.NAME,
    minWidth: 80,
    field: 'companyName',
    searchable: true,
    field2: 'email',
  },
  {
    label: 'Address',
    type: ColumnType.DETAILS,
    minWidth: 80,
    field: 'state',
    field2: 'pincode',
  },
  {
    label: 'Category',
    type: ColumnType.DETAILS,
    minWidth: 80,
    field: 'category',
    field2: 'type',
  },
  {
    label: 'Contact',
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'contact',
  },
  {
    label: 'Unique ID',
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'uniqueID',
  },
  {
    label: 'Last Updated',
    type: ColumnType.DATE,
    minWidth: 80,
    field: 'lastUpdated',
    sortable: true,
    defaultSort: true,
  },
  // {
  //   label: 'Credits',
  //   type: ColumnType.NUMBER,
  //   minWidth: 80,
  //   field: 'credits',
  //   sortable: true,
  //   defaultSort: false,
  // },
  {
    label: 'Status',
    type: ColumnType.STATUS,
    minWidth: 80,
    field: 'status',
  },
  {
    label: 'Transactions',
    type: ColumnType.ACCORDIAN,
    minWidth: 80,
    field: 'transactions',
  },
];

const useStyles = makeStyles()((theme) => ({
  icon: {
    fontSize: 'large',
    color: theme.palette.grey[500],
  },
}));

export enum PWPstatus {
  Y = 'Yet to be Added',
  A = 'Added',
  P = 'Verification Pending',
}

const PWP: React.FC = () => {
  const { classes } = useStyles();
  const request = useLoaderData();
  const data = (request as any).data;

  return (
    <>
      <Typography
        variant='h5'
        style={{ marginLeft: '6%', fontWeight: 400, marginTop: '4vh' }}
      >
        {'Plastic Waste Processors'}
      </Typography>
      <RegistrationBar content={5} />
      <CustomTable
        title='PWPs'
        search={true}
        filter={true}
        columns={columnDefs}
        data={data}
        statusEnum={PWPstatus}
        editMenu={true}
        deleteMenu={true}
      >
        <CustomButton
          title='Add Credits'
          minWidth='90px'
          onClick={() => console.log('Add PWP')}
        >
          <AddIcon className={classes.icon} />
        </CustomButton>
      </CustomTable>
    </>
  );
};

export default PWP;
