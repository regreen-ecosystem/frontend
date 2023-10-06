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
    type: ColumnType.TEXT,
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
  {
    label: 'Status',
    type: ColumnType.STATUS,
    minWidth: 80,
    field: 'details.status',
    detailsId: 'details.id',
  },
  {
    label: 'Add Credit',
    type: ColumnType.BUTTON,
    minWidth: 80,
    field: 'addCredit',
    title: 'Add',
    action: '/addCredits',
  },
];

export enum PWPstatus {
  Y = 'Yet to be Added',
  A = 'Added',
  P = 'Verification Pending',
}

const PWP: React.FC = () => {
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
        {/* <CustomButton
          title='Add Credits'
          minWidth='90px'
          onClick={() => console.log('Add PWP')}
        >
          <AddIcon className={classes.icon} />
        </CustomButton> */}
      </CustomTable>
    </>
  );
};

export default PWP;
