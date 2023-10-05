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
    label: 'Status',
    type: ColumnType.STATUS,
    minWidth: 80,
    field: 'status',
  },
  {
    label: 'Find a Match',
    type: ColumnType.BUTTON,
    minWidth: 80,
    field: 'action',
    title: 'Match',
    action: '/match',
  },
];

export enum PendingStatus {
  R = 'Requested',
  I = 'In Progress',
  C = 'Completed',
  X = 'Cancelled',
}

const Pending: React.FC = () => {
  const request = useLoaderData();
  const data = (request as any).data;
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
        statusEnum={PendingStatus}
        editMenu={true}
      >
        {/* <CustomButton
          title='Add Requests'
          minWidth='90px'
          onClick={() => console.log('Add PWP')}
        >
          <AddIcon className={classes.icon} />
        </CustomButton> */}
      </CustomTable>
    </>
  );
};

export default Pending;
