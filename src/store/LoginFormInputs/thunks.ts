import { createAsyncThunk } from '@reduxjs/toolkit';

import { login } from 'api/login';

export const loginAsync = createAsyncThunk(
  'auth/loginUser',
  async (props: { email: string; password: string }) => {
    const { email, password } = props;
    const response = await login(email, password);
    return response.data;
  },
);
