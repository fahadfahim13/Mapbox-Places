import axios from 'axios';
import { API_ROUTE } from 'shared/routes/constants';

export const login = async (email: string, password: string) => {
  const data = await axios.post(API_ROUTE.AUTH.LOGIN, {
    email,
    password,
  });
  return data;
};
