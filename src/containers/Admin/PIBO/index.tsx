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
  id: 1,
  companyName: 'Test',
  state: 'Test',
  category: 'Test',
  contact: 9911111111,
  uniqueID: 'Test',
  lastUpdated: new Date('2022-03-25'),
  credits: 280,
  attachments: 'See',
  email: 'TestMail',
  pincode: 'TestBelow',
  type: 'Type-1',
  status: 'Y',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    id: 0,
    companyName: 'Test1',
    state: 'Test',
    category: 'Test',
    contact: 9330000001,
    uniqueID: 'Test',
    lastUpdated: new Date('2023-03-25'),
    credits: 130,
    attachments: 'Test',
    email: 'TestMail@23.com',
    pincode: 'TestBelow',
    type: 'Type-1',
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

export enum PIBOstatus {
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
      <RegistrationBar content={4} />
      <CustomTable
        title='PIBOs'
        search={true}
        filter={true}
        columns={columnDefs}
        data={data}
        statusEnum={PIBOstatus}
        editMenu={true}
        deleteMenu={true}
      />
    </>
  );
};

export default PIBO;
