import { redirect } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import API from '../axios';

export const createPWP = () => {
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

export const getPWPTableData = async () => {
  const response = await API.get('/pwps');
  return { data: response.data };
};

export const getPWPData = async ({ params }: { params: any }) => {
  const response = await API.get(`/pwps/${params.id}`);
  if (response.data.details.plastic_type[0] === ',') {
    response.data.details.plastic_type =
      response.data.details.plastic_type.slice(1);
  }
  response.data.details.plastic_type = response.data.details.plastic_type
    .split(',')
    .sort()
    .join(',');
  return { data: response.data };
};

export const updatePWPData = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (requestObject.plastic_type[0] === ',') {
    requestObject.plastic_type = requestObject.plastic_type.slice(1);
  }
  requestObject.plastic_type = requestObject.plastic_type
    .split(',')
    .sort()
    .join(',');
  const response = await API.put(`/pwps/${params.id}`, requestObject);
  if (response.status === 200) {
    return redirect('/pwp');
  } else {
    throw new Error('Something went wrong');
  }
};

export const deletePWPData = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    console.log(params.id);
    return redirect('/pwp');
  }
  return redirect('/login');
};

export const createPWPData = async ({ request }: { request: any }) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (requestObject.plastic_type[0] === ',') {
    requestObject.plastic_type = requestObject.plastic_type.slice(1);
  }
  requestObject.plastic_type = requestObject.plastic_type
    .split(',')
    .sort()
    .join(',');
  const response = await API.post('/pwps', requestObject);
  if (response.status === 200) {
    return redirect('/pwp');
  } else {
    throw new Error('Something went wrong');
  }
};
