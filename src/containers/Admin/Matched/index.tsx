import React from 'react';
import CustomTable from '../../../components/CustomTable';
import {
  ColumnDetails,
  ColumnType,
} from '../../../components/CustomTable/types/CustomTableProps';
import { Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

const columnDefs: Array<ColumnDetails> = [
  {
    label: 'Company Name',
    type: ColumnType.NAME,
    minWidth: 80,
    field: 'pibo.details.name',
    searchable: true,
    field2: 'email',
  },
  {
    label: 'Category',
    type: ColumnType.DETAILS,
    minWidth: 80,
    field: 'plastic_type',
    field2: 'type',
  },
  {
    label: 'Unique ID',
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'pibo.details.uid',
  },
  {
    label: 'Credits',
    type: ColumnType.NUMBER,
    minWidth: 80,
    field: 'total_credits',
    sortable: true,
    defaultSort: true,
  },
  // {
  //   label: 'Total PWPs',
  //   type: ColumnType.TEXT,
  //   minWidth: 80,
  //   field: 'totalPWPs',
  // },
  {
    label: 'Status',
    type: ColumnType.STATUS,
    minWidth: 80,
    field: 'status',
    detailsId: 'pibo.details.id',
  },
  {
    label: 'PWPs List',
    type: ColumnType.BUTTON,
    minWidth: 80,
    field: 'pwpList',
    title: 'View',
  },
];

enum MatchedStatus {
  R = 'To be Registered',
  C = 'Certificate Issued',
}

const Matched: React.FC = () => {
  const data = (useLoaderData() as any).data;
  return (
    <>
      <Typography
        variant='h5'
        style={{ marginLeft: '6%', fontWeight: 400, marginTop: '4vh' }}
      >
        {'Matched'}
      </Typography>
      <CustomTable
        title='Matched'
        search={true}
        filter={true}
        columns={columnDefs}
        data={data}
        statusEnum={MatchedStatus}
      />
    </>
  );
};

export default Matched;
