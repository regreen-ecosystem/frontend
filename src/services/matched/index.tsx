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
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return null;
  } else return redirect('/login');
};

export const getMatchedData = async () => {
  const response = await API.get('/requests');
  if (response.status !== 200) throw new Error('Something went wrong!');
  const data = (response.data as Array<any>).filter(
    (item) => item.status === 'Ready'
  );
  data.forEach((item) => {
    item.status = 'R';
  });
  console.log(data);
  return { data: data };
};
