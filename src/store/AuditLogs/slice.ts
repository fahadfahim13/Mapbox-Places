import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from './types';

const initialState: State[] = [];

export const auditLogSlice = createSlice({
  name: 'auditLogs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addLog: (state, action: PayloadAction<State>) => {
      state.push(action.payload);
    },
  },
});

export default auditLogSlice;
