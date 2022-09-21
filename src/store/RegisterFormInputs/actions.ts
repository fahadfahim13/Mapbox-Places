import formInputSlice from './slice';
import { registerAsync } from './thunks';

const { changeRegisterFormValue, clearRegisterFormState } = formInputSlice.actions;
export { changeRegisterFormValue, clearRegisterFormState, registerAsync };
