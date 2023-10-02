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

const rowData = {
  companyName: 'Test',
  state: 'Test',
  category: 'Test',
  contact: 'Test',
  uniqueID: 'Test',
  lastUpdated: new Date('2023-03-25'),
  credits: 150,
  transactions: 'See',
  email: 'TestMail',
  pincode: 'TestPin',
  type: 'Type-1',
  status: 'A',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    companyName: 'Test1',
    state: 'Test',
    category: 'Test',
    contact: 'Test',
    uniqueID: 'Test',
    lastUpdated: new Date('2023-03-25'),
    credits: 360,
    transactions: 'Test',
    email: 'TestMail23',
    pincode: 'TestBelow',
    type: 'Type-2',
    status: 'Y',
  },
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
];

const useStyles = makeStyles()((theme) => ({
  icon: {
    fontSize: 'large',
    color: theme.palette.grey[500],
  },
}));

enum PWPStatus {
  Y = 'Yet to be Added',
  A = 'Added',
  P = 'Verification Pending',
}

const PWP: React.FC = () => {
  const { classes } = useStyles();
  return (
    <>
      <Typography
        variant='h5'
        style={{ marginLeft: '6%', fontWeight: 400, marginTop: '4vh' }}
      >
        {'Plastic Waste Processors'}
      </Typography>
      <RegistrationBar
        onClick={() => {
          'Created new PWP';
        }}
        content={5}
      />
      <CustomTable
        title='PWPs'
        search={true}
        filter={true}
        columns={columnDefs}
        data={data}
        statusEnum={PWPStatus}
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
