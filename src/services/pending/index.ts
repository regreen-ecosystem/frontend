import { redirect } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import { getPIBOData } from '../pibo';
import { getMatchForCategory } from '../credit';
import API from '../axios';
import { PlasticCategory } from '../../commons/enums';

export const getPendingTableData = async () => {
  const request = await API.get('/requests');
  if (request.status === 200) {
    return { data: request.data };
  } else {
    throw new Error('Something went wrong');
  }
};

export const getPendingData = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    if (params.id === '0') {
      return {
        id: '0',
        category: 'I',
        status: 'R',
        credits: 90,
      };
    }
    return {
      id: '1',
      category: 'II',
      status: 'X',
      credits: 30,
    };
  }
  return redirect('/login');
};

export const updatePendingStatus = async ({
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
      id.push(value);
    }
  }
  console.log(id);
  const requestObject = Object.fromEntries(formData);
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return redirect('/pending');
  } else return redirect('/login');
};

// Maybe Move to Credits Service
export const createRequest = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    const pibo = (await getPIBOData({ params })).data;
    if (!pibo) {
      throw new Error('No PIBO found');
    }
    return {
      plastic_type: pibo.details.plastic_type,
      credits: Array(pibo.details.plastic_type.split(',').length).fill(0),
    };
  }
  return redirect('/login');
};

export const upsertRequest = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return redirect('/pending');
  } else return redirect('/login');
};

export const getMatches = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    const request = (await getPendingData({ params })) as any;
    if (!request) {
      throw new Error('No Request found');
    }
    console.log(request);
    const creditMatches = await getMatchForCategory(request.category);
    console.log(creditMatches);
    return {
      data: creditMatches,
    };
  }
  return redirect('/login');
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
        total_credits: requestObject[key],
        pending_credits: requestObject[key],
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
