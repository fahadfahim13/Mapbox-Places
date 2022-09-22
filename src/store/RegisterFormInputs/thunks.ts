import { createAsyncThunk } from '@reduxjs/toolkit';

import { register } from 'api/register';

export const registerAsync = createAsyncThunk(
  'auth/registerUser',
  async (props: { name: string; email: string; password: string }, thunkAPI) => {
    const { name, email, password } = props;
    const response = await register(name, email, password);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    return thunkAPI.rejectWithValue(response.data.message);
  },
);
