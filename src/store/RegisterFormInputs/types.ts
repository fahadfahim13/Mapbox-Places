import { REGISTER_INPUT_NAMES } from 'uicontainers/User/RegisterForm/types';

export interface Inputs {
  status: 'Idle' | 'Pending' | 'Registered' | 'NotRegistered' | 'Failed';
  [REGISTER_INPUT_NAMES.NAME]: string;
  [REGISTER_INPUT_NAMES.EMAIL]: string;
  [REGISTER_INPUT_NAMES.PASSWORD]: string;
  errorMessage: string | null;
}

export type InputTypes =
  | REGISTER_INPUT_NAMES.NAME
  | REGISTER_INPUT_NAMES.EMAIL
  | REGISTER_INPUT_NAMES.PASSWORD;

export interface InputChangeAction {
  key: InputTypes;
  value: string;
}
