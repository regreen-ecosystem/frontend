import React from 'react';
import CustomTable from '../../components/CustomTable';
import {
  ColumnDetails,
  ColumnType,
} from '../../components/CustomTable/types/CustomTableProps';

const Home: React.FC = () => {
  const columnDefs: Array<ColumnDetails> = [
    {
      label: 'Company Name',
      type: ColumnType.TEXT,
      minWidth: 80,
      field: 'companyName',
      searchable: true,
    },
    {
      label: 'Address',
      type: ColumnType.TEXT,
      minWidth: 80,
      field: 'address',
    },
    {
      label: 'Category',
      type: ColumnType.TEXT,
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
      type: ColumnType.ACCORDIAN,
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
  };

  const data: any[] = [
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

  return (
    <>
      <CustomTable
        title='Test'
        search={true}
        filter={true}
        columns={columnDefs}
        data={data}
      />
    </>
  );
};

export default Home;
