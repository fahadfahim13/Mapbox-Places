import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InputChangeAction, Inputs } from './types';
import { REGISTER_INPUT_NAMES } from 'uicontainers/User/RegisterForm/types';
import { registerAsync } from './thunks';

const initialState: Inputs = {
  status: 'NotRegistered',
  [REGISTER_INPUT_NAMES.NAME]: '',
  [REGISTER_INPUT_NAMES.EMAIL]: '',
  [REGISTER_INPUT_NAMES.PASSWORD]: '',
};

export const registerFormInputSlice = createSlice({
  name: 'registerFormInputs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeRegisterFormValue: (state, action: PayloadAction<InputChangeAction>) => {
      state[action.payload.key] = action.payload.value;
    },
    clearRegisterFormState: (state) => {
      state[REGISTER_INPUT_NAMES.NAME] = '';
      state[REGISTER_INPUT_NAMES.EMAIL] = '';
      state[REGISTER_INPUT_NAMES.PASSWORD] = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = 'Pending';
      })
      .addCase(registerAsync.fulfilled, (state) => {
        state.status = 'Registered';
      })
      .addCase(registerAsync.rejected, (state) => {
        state.status = 'NotRegistered';
      });
  },
});

export default registerFormInputSlice;
