import { getCookie } from 'typescript-cookie';
import { redirect } from 'react-router-dom';
import { getPWPData } from '../pwp';
import API from '../axios';
import { PlasticCategory } from '../../commons/enums';

export const getCreditTableData = async () => {
  const response = await API.get('/assets');
  if (response.status === 200) {
    return { data: response.data };
  }
  throw new Error('Something went wrong');
};

export const getCreditData = async ({ params }: { params: any }) => {
  const response = await API.get(`/assets/${params.id}`);
  if (response.status === 200) {
    return { data: response.data };
  }
  throw new Error('Something went wrong');
};

export const createCredit = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    const pwp = await getPWPData({ params });
    if (!pwp) {
      throw new Error('No PIBO found');
    }
    console.log(pwp);
    const categories = pwp.data.details.plastic_type.split(',');
    return {
      category: categories,
      credits: Array(categories.length).fill(0),
    };
  }
  return redirect('/login');
};

export const updateCredit = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
};

export const insertCredit = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  const pwp = { id: params.id };
  for (const key of Object.keys(PlasticCategory)) {
    if (requestObject[key] && requestObject[key] > 0) {
      const body = {
        plastic_type: key,
        total_credits: requestObject[key],
        pending_credits: requestObject[key],
        pwp: pwp,
      };
      const response = await API.post('/assets', body);
      if (response.status !== 200) {
        throw new Error('Something went wrong');
      }
    }
  }
  return redirect('/pending');
};

export const getMatchForCategory = async (category: string) => {
  const response = await API.get(`/assets`);
  if (response.status !== 200) {
    throw new Error('Something went wrong');
  }
  const data = (response.data as Array<any>).filter((asset) => {
    return asset.plastic_type === category && asset.total_credits > 0;
  });
  return { data: data };
};
