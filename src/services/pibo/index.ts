import { redirect } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import API from '../axios';

export const createPIBO = () => {
  return {
    data: {
      details: {
        name: '',
        address: '',
        state: '',
        pincode: '',
        uid: '',
        email: '',
        status: 'Y',
        plastic_type: '',
      },
    },
  };
};

export const getPIBOTableData = async () => {
  const response = await API.get('/pibos');
  return { data: response.data };
};

export const getPIBOData = async ({ params }: { params: any }) => {
  const response = await API.get(`/pibos/${params.id}`);
  return { data: response.data };
};

export const updatePIBOData = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  console.log(requestObject, params.id);
  const response = await API.put(`/pibos/${params.id}`, requestObject);
  if (response.status === 200) {
    return redirect('/pibo');
  } else {
    throw new Error('Something went wrong');
  }
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
  const response = await API.post('/pibos', requestObject);
  if (response.status === 200) {
    return redirect('/pibo');
  } else {
    throw new Error('Something went wrong');
  }
};
