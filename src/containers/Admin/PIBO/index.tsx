import React from 'react';
import CustomTable from '../../../components/CustomTable';
import {
  ColumnDetails,
  ColumnType,
} from '../../../components/CustomTable/types/CustomTableProps';
import { Typography } from '@mui/material';
import RegistrationBar from '../../../components/RegistrationBar';

const columnDefs: Array<ColumnDetails> = [
  {
    label: 'Company Name',
    type: ColumnType.NAME,
    minWidth: 80,
    field: 'companyName',
    searchable: true,
  },
  {
    label: 'Address',
    type: ColumnType.DETAILS,
    minWidth: 80,
    field: 'address',
  },
  {
    label: 'Category',
    type: ColumnType.DETAILS,
    minWidth: 80,
    field: 'category',
  },
  {
    label: 'Contact',
    type: ColumnType.NUMBER,
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
    label: 'Recent Transactions',
    type: ColumnType.ACCORDIAN,
    minWidth: 80,
    field: 'attachments',
  },
];

const rowData = {
  companyName: 'Test',
  address: 'Test',
  category: 'Test',
  contact: 9911111111,
  uniqueID: 'Test',
  lastUpdated: new Date('2022-03-25'),
  credits: 280,
  attachments: 'See',
  email: 'TestMail',
  address1: 'TestBelow',
  companyName1: 'Test88',
  category1: 'Type-1',
  status: 'Y',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    companyName: 'Test1',
    address: 'Test',
    category: 'Test',
    contact: 9330000001,
    uniqueID: 'Test',
    lastUpdated: new Date('2023-03-25'),
    credits: 130,
    attachments: 'Test',
    email: 'TestMail',
    address1: 'TestBelow',
    companyName1: 'Test',
    category1: 'Type-1',
    status: 'P',
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

enum PIBOstatus {
  Y = 'Yet to be Added',
  P = 'Verification Pending',
  A = 'Approved',
}

const PIBO: React.FC = () => {
  return (
    <>
      <Typography
        variant='h5'
        style={{ marginLeft: '6%', fontWeight: 400, marginTop: '4vh' }}
      >
        {'Producers & Brand Owners'}
      </Typography>
      <RegistrationBar
        onClick={() => {
          'Created new PIBO';
        }}
        content={4}
      />
      <CustomTable
        title='PIBOs'
        search={true}
        filter={true}
        columns={columnDefs}
        data={data}
        statusEnum={PIBOstatus}
      />
    </>
  );
};

export default PIBO;
