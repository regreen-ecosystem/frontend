import { redirect } from 'react-router-dom';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import API from '../axios';

export const getUserLoggedIn = async () => {
  const token = getCookie('jwt');

  if (token) {
    return true;
  }
  return redirect('/login');
};

export const login = async ({ request }: { request: any }) => {
  const requestObject = Object.fromEntries(await request.formData());
  const body = {
    identifier: requestObject.email,
    password: requestObject.password,
  };
  const response = await API.post('/auth/local', body);
  if (response.data.jwt) {
    setCookie('jwt', response.data.jwt);
    setCookie('username', response.data.user.username);
    return redirect('/');
  }

  return false;
};

// TODO: testing remains.

export const logout = async () => {
  removeCookie('jwt');
  removeCookie('username');
  return redirect('/login');
};

export const signup = async ({ request }: { request: any }) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (requestObject.email !== '' && requestObject.password !== '') {
    console.log(requestObject.email, requestObject.password);
    redirect('/');
  }
  return false;
};
