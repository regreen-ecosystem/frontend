import { redirect } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import { getPIBOData } from '../pibo';
import API from '../axios';
import { PlasticCategory } from '../../commons/enums';
import { getMatchForCategory } from '../credit';

export const getPendingTableData = async () => {
  const request = await API.get('/requests');
  if (request.status === 200) {
    return { data: request.data };
  } else {
    throw new Error('Something went wrong');
  }
};

export const getPendingData = async ({ params }: { params: any }) => {
  const request = await API.get(`/requests/${params.id}`);
  if (request.status === 200) {
    request.data.credits = [request.data.credits];
    return { data: request.data };
  } else {
    throw new Error('Something went wrong');
  }
};

export const createRequest = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    const pibo = (await getPIBOData({ params })).data;
    if (!pibo) {
      throw new Error('No PIBO found');
    }
    return {
      data: {
        plastic_type: pibo.details.plastic_type,
        credits: Array(pibo.details.plastic_type.split(',').length).fill(0),
      },
    };
  }
  return redirect('/login');
};

export const updateRequest = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  for (const key of Object.keys(PlasticCategory)) {
    if (requestObject[key] && requestObject[key] > 0) {
      const body = {
        credits: requestObject[key],
        status: requestObject.status,
      };
      const response = await API.put(`/requests/${params.id}`, body);
      if (response.status !== 200) {
        throw new Error('Something went wrong');
      }
      return redirect('/pending');
    }
  }

  if (requestObject.status === 'I' || requestObject.status === 'C') {
    if (requestObject.selling_price) {
      const response = await API.put(`/requests/${params.id}/price`, {
        selling_price: requestObject.selling_price,
      });
      if (response.status !== 200) {
        throw new Error('Something went wrong');
      }
      return redirect('/pending');
    } else {
      const response = await API.put(`/requests/${params.id}`, {
        status: requestObject.status,
      });
      if (response.status !== 200) {
        throw new Error('Something went wrong');
      }
      return redirect('/pending');
    }
  }
};

export const insertRequest = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  const pibo = { id: params.id };
  for (const key of Object.keys(PlasticCategory)) {
    if (requestObject[key] && requestObject[key] > 0) {
      const body = {
        plastic_type: key,
        credits: requestObject[key],
        pibo: pibo,
      };
      const response = await API.post('/requests', body);
      if (response.status !== 200) {
        throw new Error('Something went wrong');
      }
    }
  }
  return redirect('/pending');
};

export const getMatches = async ({ params }: { params: any }) => {
  const request = await API.get(`/requests/${params.id}`);
  if (request.status === 200) {
    const data = request.data;
    const matches = await API.get(
      `/assets/filter?plastic_type=${data.plastic_type}&credits=0`
    );
    return { data: matches.data, request: request.data };
  } else {
    throw new Error('Something went wrong');
  }
};

export const createMatch = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const formData = await request.formData();
  const id = [];
  for (const [name, value] of formData) {
    if (name === 'id') {
      id.push({ id: value });
    }
  }
  const requestObject = Object.fromEntries(formData);
  const body = {
    selling_price: requestObject.sellingCost,
    request: { id: params.id },
    assets: id,
  };
  const response = await API.post('/transactions', body);
  if (response.status !== 200) {
    throw new Error('Something went wrong');
  }
  return redirect('/pending');
};
