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
    label: 'Category',
    type: ColumnType.DETAILS,
    minWidth: 80,
    field: 'category',
  },
  {
    label: 'Unique ID',
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'uniqueID',
  },
  {
    label: 'Credits',
    type: ColumnType.NUMBER,
    minWidth: 80,
    field: 'credits',
    sortable: true,
    defaultSort: true,
  },
  {
    label: 'Action',
    type: ColumnType.BUTTON,
    minWidth: 80,
    field: 'action',
  },
];

const rowData = {
  companyName: 'Test',
  category: 'Test',
  uniqueID: 'Test',
  credits: 80,
  companyName1: 'Test88',
  category1: 'Type-1',
  action: 'Find a Match',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    companyName: 'Test1',
    category: 'Test',
    uniqueID: 'Test',
    credits: 20,
    companyName1: 'Test',
    category1: 'Type-1',
    action: 'Find a Match',
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

const Pending: React.FC = () => {
  return (
    <>
      <Typography
        variant='h5'
        style={{ marginLeft: '6%', fontWeight: 400, marginTop: '4vh' }}
      >
        {'Pending'}
      </Typography>
      <CustomTable
        title='Pending'
        search={true}
        filter={true}
        columns={columnDefs}
        data={data}
      />
    </>
  );
};

export default Pending;
