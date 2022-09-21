import { INPUT_NAMES } from 'uicontainers/FormInputs/types';

export interface Inputs {
  [INPUT_NAMES.NAME]: string;
  [INPUT_NAMES.REGION]: string;
  [INPUT_NAMES.SITE]: string;
  [INPUT_NAMES.LATITUDE]: string;
  [INPUT_NAMES.LONGITUDE]: string;
}

export type InputTypes =
  | INPUT_NAMES.NAME
  | INPUT_NAMES.REGION
  | INPUT_NAMES.SITE
  | INPUT_NAMES.LATITUDE
  | INPUT_NAMES.LONGITUDE;

export interface InputChangeAction {
  key: InputTypes;
  value: string;
}
