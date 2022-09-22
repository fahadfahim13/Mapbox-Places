import formInputSlice from './slice';
import { loginAsync } from './thunks';

const { changeLoginFormValue, clearLoginFormState, logout } = formInputSlice.actions;
export { changeLoginFormValue, clearLoginFormState, loginAsync, logout };
