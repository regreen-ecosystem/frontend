import { getCookie } from 'typescript-cookie';
import { redirect } from 'react-router-dom';
import API from '../axios';

export const updateMatchedStatus = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  const response = await API.put(`/transactions/${params.id}`, requestObject);
  if (response.status !== 200) throw new Error('Something went wrong!');
  return redirect('/matched');
};

export const getMatchedData = async () => {
  const response = await API.get('/requests/matched');
  if (response.status !== 200) throw new Error('Something went wrong!');
  console.log(response.data);
  return { data: response.data };
};
