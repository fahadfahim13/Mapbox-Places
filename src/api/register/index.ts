import axios from 'axios';
import { API_ROUTE } from 'shared/routes/constants';

export const register = async (name: string, email: string, password: string) => {
  const data = await axios
    .post(API_ROUTE.AUTH.REGISTER, {
      name,
      email,
      password,
    })
    .then((res) => res)
    .catch((err) => err.response);
  return data;
};
