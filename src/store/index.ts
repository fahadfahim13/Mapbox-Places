import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
import alertReducer from './Alert/reducer';
import cityReducer from './Map/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alertProp: alertReducer,
    cityReducer: cityReducer,
  },
});
