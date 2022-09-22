import axios from 'axios';
import { API_ROUTE } from 'shared/routes/constants';
import { USER_TOKEN } from '../../shared/constants';

export const get = async (value: string, page: number, limit: number) => {
  const data = await axios
    .post(
      API_ROUTE.MOVIE.GET,
      {
        value,
        page,
        limit,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(USER_TOKEN)}`,
        },
      },
    )
    .then((res) => res)
    .catch((err) => err.response);
  return data;
};
