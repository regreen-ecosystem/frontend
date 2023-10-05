import React from 'react';
import CustomTable from '../../../components/CustomTable';
import {
  ColumnDetails,
  ColumnType,
} from '../../../components/CustomTable/types/CustomTableProps';
import { Typography } from '@mui/material';
import RegistrationBar from '../../../components/RegistrationBar';
import { useLoaderData } from 'react-router-dom';

const columnDefs: Array<ColumnDetails> = [
  {
    label: 'Company Name',
    type: ColumnType.NAME,
    minWidth: 80,
    field: 'details.name',
    searchable: true,
    field2: 'details.email',
  },
  {
    label: 'Address',
    type: ColumnType.DETAILS,
    minWidth: 80,
    field: 'details.state',
    field2: 'details.pincode',
  },
  // {
  //   label: 'Category',
  //   type: ColumnType.DETAILS,
  //   minWidth: 80,
  //   field: 'category',
  //   field2: 'type',
  // },
  {
    label: 'Contact',
    type: ColumnType.NUMBER,
    minWidth: 80,
    field: 'details.phone_number',
    searchable: true,
  },
  {
    label: 'Unique ID',
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'details.uid',
  },
  {
    label: 'Last Updated',
    type: ColumnType.DATE,
    minWidth: 80,
    field: 'updatedAt',
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
    field: 'details.status',
  },
  // {
  //   label: 'Recent Transactions',
  //   type: ColumnType.ACCORDIAN,
  //   minWidth: 80,
  //   field: 'attachments',
  // },
  {
    label: 'Add Request',
    type: ColumnType.BUTTON,
    minWidth: 80,
    field: 'action',
    title: 'Add',
    action: '/addRequest',
  },
];

export enum PIBOstatus {
  Y = 'Yet to be Added',
  P = 'Verification Pending',
  A = 'Approved',
}

const PIBO: React.FC = () => {
  const request = useLoaderData();
  const data = (request as any).data;

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
