import { createAsyncThunk } from '@reduxjs/toolkit';

import { get } from 'api/movie';

export const fetchMovieAsync = createAsyncThunk(
  'movies/fetch',
  async (props: { page: number; limit: number }, thunkAPI) => {
    const { page, limit } = props;
    const response = await get('', page, limit);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    return thunkAPI.rejectWithValue(response.data.message);
  },
);
