import { RootState } from 'store/types';

export const selectRegisterFormInputs = (state: RootState) => state.registerFormReducer;
