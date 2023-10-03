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
