import formInputSlice from './slice';
import { loginAsync } from './thunks';

const { changeLoginFormValue, clearLoginFormState } = formInputSlice.actions;
export { changeLoginFormValue, clearLoginFormState, loginAsync };
