import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InputChangeAction, Inputs } from './types';
import { INPUT_NAMES } from 'uicontainers/FormInputs/types';

const initialState: Inputs = {
  [INPUT_NAMES.NAME]: '',
  [INPUT_NAMES.REGION]: '',
  [INPUT_NAMES.SITE]: '',
  [INPUT_NAMES.LATITUDE]: '',
  [INPUT_NAMES.LONGITUDE]: '',
};

export const formInputSlice = createSlice({
  name: 'formInputs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeValue: (state, action: PayloadAction<InputChangeAction>) => {
      state[action.payload.key] = action.payload.value;
    },
    clearState: (state) => {
      state[INPUT_NAMES.NAME] = '';
      state[INPUT_NAMES.REGION] = '';
      state[INPUT_NAMES.SITE] = '';
      state[INPUT_NAMES.LATITUDE] = '';
      state[INPUT_NAMES.LONGITUDE] = '';
    },
  },
});

export default formInputSlice;
