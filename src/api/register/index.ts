import axios from 'axios';

export const register = async (url: string, name: string, email: string, password: string) => {
  const data = await axios.post(url, {
    name,
    email,
    password,
  });
  return data;
};
