import React from 'react';
import CustomTable from '../../../components/CustomTable';
import {
  ColumnDetails,
  ColumnType,
} from '../../../components/CustomTable/types/CustomTableProps';
import { Typography } from '@mui/material';

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
    label: 'Category',
    type: ColumnType.DETAILS,
    minWidth: 80,
    field: 'category',
    field2: 'type',
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
    label: 'Total PWPs',
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'totalPWPs',
  },
  {
    label: 'Status',
    type: ColumnType.STATUS,
    minWidth: 80,
    field: 'status',
  },
  {
    label: 'PWPs List',
    type: ColumnType.BUTTON,
    minWidth: 80,
    field: 'pwpList',
  },
];

const rowData = {
  companyName: 'Test',
  category: 'Test',
  uniqueID: 'Test',
  credits: 800,
  email: 'Test88',
  totalPWPs: '4',
  pwpList: 'View',
  status: 'C',
  type: 'Type-1',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    companyName: 'Test1',
    category: 'Test',
    uniqueID: 'Test',
    credits: 260,
    email: 'Test',
    totalPWPs: '6',
    pwpList: 'View',
    status: 'R',
    type: 'Type-I',
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

enum MatchedStatus {
  R = 'To be Registered',
  C = 'Certificate Issued',
}

const Matched: React.FC = () => {
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
        editMenu={true}
      />
    </>
  );
};

export default Matched;
