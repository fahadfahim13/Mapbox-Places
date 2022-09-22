import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
import alertReducer from './Alert/reducer';
import registerFormReducer from './RegisterFormInputs/reducer';
import loginFormReducer from './LoginFormInputs/reducer';
import movieReducer from './MovieStore/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    alertProp: alertReducer,
    registerFormReducer,
    loginFormReducer,
    movies: movieReducer,
  },
});
