import { redirect } from 'react-router-dom';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

export const getUserLoggedIn = async () => {
  console.log('getUserLoggedIn');
  const token = getCookie('jwt');
  if (token) {
    return true;
  }
  return redirect('/login');
};

export const login = async ({ request }: { request: any }) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (
    requestObject.email === 'user@gmail.com' &&
    requestObject.password === 'password'
  ) {
    setCookie('jwt', 'token');
    return redirect('/');
  }
  return false;
};

// TODO: testing remains.

export const logout = async () => {
  removeCookie('jwt');
  redirect('/login');
};

export const signup = async ({ request }: { request: any }) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (requestObject.email !== '' && requestObject.password !== '') {
    console.log(requestObject.email, requestObject.password);
    redirect('/');
  }
  return false;
};
