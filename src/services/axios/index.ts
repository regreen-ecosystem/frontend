import axios from 'axios';
import { getCookie } from 'typescript-cookie';
import { redirect } from 'react-router-dom';

const API = () => {
  // const headers = {
  //   'Content-Type': 'application/json',
  // };

  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  instance.interceptors.request.use((params) => {
    const token = getCookie('jwtToken');
    if (token) params.headers.Authorization = token ? `Bearer ${token}` : '';
    return params;
  });

  instance.interceptors.response.use(
    (response) => {
      if (response.status === 401) {
        console.log('You are not authorized');
        redirect('/login');
      }
      return response;
    }
    // (error) => {
    // 	if (error.response && error.response.data) {
    // 		return Promise.reject(error.response.data);
    // 	}
    // 	return Promise.reject(error.message);
    // },
  );

  return instance;
};

export default API();
