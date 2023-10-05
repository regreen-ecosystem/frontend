import { redirect } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';

const rowData = {
  id: 1,
  companyName: 'Test1',
  state: 'Test',
  category: 'Test',
  contact: 9911111111,
  uniqueID: 'Test',
  lastUpdated: new Date('2022-03-25'),
  credits: 280,
  attachments: 'See',
  email: 'TestMail',
  pincode: 'TestBelow',
  type: 'Type-1',
  status: 'Y',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    id: 0,
    companyName: 'Test0',
    state: 'Test',
    category: 'Test',
    contact: 9330000001,
    uniqueID: 'Test',
    lastUpdated: new Date('2023-03-25'),
    credits: 130,
    attachments: 'Test',
    email: 'TestMail@23.com',
    pincode: 'TestBelow',
    type: 'Type-1',
    status: 'P',
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

export const getPIBOTableData = async () => {
  if (getCookie('jwt')) {
    return { data };
  }
  redirect('/login');
};

export const getPIBOData = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    if (params.id === 0) {
      return {
        companyName: 'Test',
        state: 'Test',
        category: ['I', 'II', 'IV'],
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
      category: ['I', 'III'],
      email: 'TestMail@mail.com',
      pincode: '302010',
      status: 'A',
      address: 'TestAddress2',
      cpcbId: '1234566789',
    };
  }
  redirect('/login');
};

export const updatePIBOData = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return redirect('/pibo');
  }
  return redirect('/login');
};

export const deletePIBOData = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    console.log(params.id);
    return redirect('/pibo');
  }
  return redirect('/login');
};

export const createPIBOData = async ({ request }: { request: any }) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (getCookie('jwt')) {
    console.log(requestObject);
    return redirect('/pibo');
  }
  redirect('/login');
};

export const updatePIBOStatus = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return null;
  } else return redirect('/login');
};
