import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
import alertReducer from './Alert/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alertProp: alertReducer,
  },
});
