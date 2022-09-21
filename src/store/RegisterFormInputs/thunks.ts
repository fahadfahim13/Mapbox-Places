import { createAsyncThunk } from '@reduxjs/toolkit';

import { register } from 'api/register';

export const registerAsync = createAsyncThunk(
  'auth/registerUser',
  async (props: { name: string; email: string; password: string }) => {
    const { name, email, password } = props;
    const response = await register(name, email, password);
    return response.data;
  },
);
