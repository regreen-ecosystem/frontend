import React from 'react';
import CustomTable from '../../../components/CustomTable';
import {
  ColumnDetails,
  ColumnType,
} from '../../../components/CustomTable/types/CustomTableProps';
import { Typography } from '@mui/material';
import CustomButton from '../../../components/CustomButton';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from 'tss-react/mui';

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
    label: 'Status',
    type: ColumnType.STATUS,
    minWidth: 80,
    field: 'status',
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
  status: 'I',
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
    status: 'R',
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

enum PendingStatus {
  R = 'Requested',
  I = 'In Progress',
  C = 'Completed',
  X = 'Cancelled',
}

const useStyles = makeStyles()((theme) => ({
  icon: {
    fontSize: 'large',
    color: theme.palette.grey[500],
  },
}));

const Pending: React.FC = () => {
  const { classes } = useStyles();
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
      >
        <CustomButton
          title='Add Requests'
          minWidth='90px'
          onClick={() => console.log('Add PWP')}
        >
          <AddIcon className={classes.icon} />
        </CustomButton>
      </CustomTable>
    </>
  );
};

export default Pending;
