import { RootState } from 'store/types';

export const selectFormInputs = (state: RootState) => state.formReducer;
