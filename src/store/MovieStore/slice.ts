import { createSlice } from '@reduxjs/toolkit';

import { Inputs } from './types';
import { fetchMovieAsync } from './thunks';

const initialState: Inputs = {
  status: 'Idle',
  data: [],
  total: 0,
  page: 1,
  last_page: 1,
  errorMessage: null,
};

export const movieSlice = createSlice({
  name: 'movieValues',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    clearMovieState: (state) => {
      state.status = 'Idle';
      state.data = [];
      state.total = 0;
      state.page = 1;
      state.last_page = 1;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieAsync.pending, (state) => {
        state.status = 'Pending';
      })
      .addCase(fetchMovieAsync.fulfilled, (state, action) => {
        state.status = 'Idle';
        state.data = action.payload.data;
        state.total = action.payload.total;
        state.page = action.payload.page;
        state.last_page = action.payload.last_page;
        state.errorMessage = null;
      })
      .addCase(fetchMovieAsync.rejected, (state, action) => {
        state.status = 'Failed';
        state.errorMessage = JSON.stringify(action.payload) ?? 'Something Wrong Happened';
      });
  },
});

export default movieSlice;
