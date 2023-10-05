import React from 'react';
import {
  ColumnDetails,
  ColumnType,
} from '../../../components/CustomTable/types/CustomTableProps';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import CustomTable from '../../../components/CustomTable';

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
    label: 'Credits',
    type: ColumnType.NUMBER,
    minWidth: 80,
    field: 'credit',
    sortable: true,
    defaultSort: true,
  },
];

const Matching: React.FC = () => {
  const nav = useNavigate();
  const data = (useLoaderData() as any).data;
  return (
    <>
      <Typography
        variant='h5'
        style={{ marginLeft: '6%', fontWeight: 400, marginTop: '4vh' }}
      >
        {'Pending'}
      </Typography>
      <Form method='POST'>
        <CustomTable
          title='Matches'
          search={true}
          columns={columnDefs}
          data={data}
          select={true}
        >
          <Button
            variant='contained'
            style={{ borderRadius: '10px' }}
            type='button'
            onClick={() => {
              nav(-1);
            }}
          >
            <Typography variant='body1'>{'Cancel'}</Typography>
          </Button>
          <Button
            variant='contained'
            style={{ borderRadius: '10px' }}
            type='submit'
          >
            <Typography variant='body1'>{'Done'}</Typography>
          </Button>
        </CustomTable>
      </Form>
    </>
  );
};

export default Matching;
