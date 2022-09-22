import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InputChangeAction, Inputs } from './types';
import { REGISTER_INPUT_NAMES } from 'uicontainers/User/RegisterForm/types';
import { loginAsync } from './thunks';
import { USER_TOKEN } from 'shared/constants';

const initialState: Inputs = {
  status: 'Idle',
  [REGISTER_INPUT_NAMES.EMAIL]: '',
  [REGISTER_INPUT_NAMES.PASSWORD]: '',
  errorMessage: null,
};

export const loginFormInputSlice = createSlice({
  name: 'loginFormInputs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeLoginFormValue: (state, action: PayloadAction<InputChangeAction>) => {
      state[action.payload.key] = action.payload.value;
    },
    clearLoginFormState: (state) => {
      state.status = 'Idle';
      state[REGISTER_INPUT_NAMES.EMAIL] = '';
      state[REGISTER_INPUT_NAMES.PASSWORD] = '';
      state.errorMessage = null;
    },
    logout: (state) => {
      state.status = 'LoggedOut';
      state[REGISTER_INPUT_NAMES.EMAIL] = '';
      state[REGISTER_INPUT_NAMES.PASSWORD] = '';
      state.errorMessage = null;
      localStorage.removeItem(USER_TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'Pending';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'LoggedIn';
        localStorage.setItem(USER_TOKEN, action.payload.token);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'Failed';
        console.log('In redux: ', action);
        state.errorMessage = JSON.stringify(action.payload) ?? 'Invalid Login';
      });
  },
});

export default loginFormInputSlice;
