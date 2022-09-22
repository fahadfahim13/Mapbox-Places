import { createAsyncThunk } from '@reduxjs/toolkit';

import { login } from 'api/login';

export const loginAsync = createAsyncThunk(
  'auth/loginUser',
  async (props: { email: string; password: string }, thunkAPI) => {
    const { email, password } = props;
    const response = await login(email, password);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    return thunkAPI.rejectWithValue(response.data.message);
  },
);
