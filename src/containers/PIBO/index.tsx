import React from 'react';
import CustomTable from '../../components/CustomTable';
import {
  ColumnDetails,
  ColumnType,
} from '../../components/CustomTable/types/CustomTableProps';
import { Typography } from '@mui/material';

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
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'lastUpdated',
  },
  {
    label: 'Credits',
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'credits',
  },
  {
    label: 'Attachments',
    type: ColumnType.BUTTON,
    minWidth: 80,
    field: 'attachments',
  },
];

const rowData = {
  companyName: 'Test',
  address: 'Test',
  category: 'Test',
  contact: 'Test',
  uniqueID: 'Test',
  lastUpdated: 'Test',
  credits: 'Test',
  attachments: 'Test',
  email: 'TestMail',
  address1: 'TestBelow',
  companyName1: 'Test88',
  category1: 'Type-1',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    companyName: 'Test1',
    address: 'Test',
    category: 'Test',
    contact: 'Test',
    uniqueID: 'Test',
    lastUpdated: 'Test2',
    credits: 'Test',
    attachments: 'Test',
    email: 'TestMail',
    address1: 'TestBelow',
    companyName1: 'Test',
    category1: 'Type-1',
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

const PIBO: React.FC = () => {
  return (
    <>
      <Typography variant='h6' style={{ marginLeft: '6%', fontWeight: 400 }}>
        {'Producers & Brand Owners'}
      </Typography>
      <CustomTable
        title='PIBOs'
        search={true}
        filter={true}
        columns={columnDefs}
        data={data}
      />
    </>
  );
};

export default PIBO;
