import { redirect } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';

const rowData = {
  id: '1',
  companyName: 'Test',
  state: 'Test',
  category: 'Test',
  contact: 'Test',
  uniqueID: 'Test',
  lastUpdated: new Date('2023-03-25'),
  credits: 150,
  transactions: 'See',
  email: 'TestMail',
  pincode: 'TestPin',
  type: 'Type-1',
  status: 'A',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    id: '0',
    companyName: 'Test1',
    state: 'Test',
    category: 'Test',
    contact: 'Test',
    uniqueID: 'Test',
    lastUpdated: new Date('2023-03-25'),
    credits: 360,
    transactions: 'Test',
    email: 'TestMail23',
    pincode: 'TestBelow',
    type: 'Type-2',
    status: 'Y',
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

export const getPWPTableData = async () => {
  if (getCookie('jwt')) {
    return data;
  }
  redirect('/login');
};

export const getPWPData = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    if (params.id === 0) {
      return {
        companyName: 'Test',
        state: 'Test',
        category: ['I', 'II'],
        email: 'TestMail@mail.com',
        pincode: '302010',
        status: 'A',
        address: 'TestAddress2',
        cpcbId: '1234566789',
      };
    }
    return {
      companyName: 'Test',
      state: 'Test',
      category: ['I', 'II'],
      email: 'TestMail@mail.com',
      pincode: '302010',
      status: 'A',
      address: 'TestAddress2',
      cpcbId: '1234566789',
    };
  }
  redirect('/login');
};

export const updatePWPData = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return true;
  }
  redirect('/login');
};

export const deletePWPData = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    console.log(params.id);
    return true;
  }
  redirect('/login');
};

export const createPWPData = async ({ request }: { request: any }) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (getCookie('jwt')) {
    console.log(requestObject);
    return true;
  }
  redirect('/login');
};
