import { redirect } from 'react-router-dom';

export interface PIBOData {
  companyName: string;
  address: string;
  state: string;
  pincode: string;
  cpcbId: string;
  email: string;
  status: string;
  category: Array<string>;
}

export interface PWPData {
  companyName: string;
  address: string;
  state: string;
  pincode: string;
  cpcbId: string;
  email: string;
  status: string;
  category: Array<string>;
}

export const createPIBO = () => {
  return {
    companyName: '',
    address: '',
    state: '',
    pincode: '',
    cpcbId: '',
    email: '',
    status: '',
    category: [],
  };
};

export const createPWP = () => {
  return {
    companyName: '',
    address: '',
    state: '',
    pincode: '',
    cpcbId: '',
    email: '',
    status: '',
    category: [],
  };
};

export const createPIBOData = ({
  params,
}: {
  params: any;
}): PIBOData | null => {
  console.log(params);
  if (params.id === '1') {
    return {
      companyName: 'Test',
      state: 'Test',
      category: ['I', 'III'],
      email: 'TestMail',
      pincode: 'TestBelow',
      status: 'Y',
      address: 'TestAddress',
      cpcbId: '1234567890',
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
};

export const createPWPData = ({ params }: { params: any }): PWPData => {
  if (params.id === '1') {
    return {
      companyName: 'Test',
      state: 'Test',
      category: ['I', 'III'],
      email: 'TestMail',
      pincode: 'TestBelow',
      status: 'Y',
      address: 'TestAddress',
      cpcbId: '1234567890',
    };
  } else {
    return {
      companyName: 'Test',
      state: 'Test',
      category: ['I', 'II'],
      email: '',
      pincode: '302010',
      status: 'A',
      address: 'TestAddress2',
      cpcbId: '1234566789',
    };
  }
};

export const editPIBOData = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  return redirect('/pibo');
};
