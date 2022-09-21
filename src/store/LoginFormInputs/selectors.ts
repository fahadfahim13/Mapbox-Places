import { RootState } from 'store/types';

export const selectLoginFormInputs = (state: RootState) => state.loginFormReducer;
