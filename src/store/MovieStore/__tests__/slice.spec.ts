import { changeValue, clearState } from '../actions';
import formInputReducer from '../reducer';
import { Inputs } from '../types';
import { INPUT_NAMES } from 'uicontainers/FormInputs/types';

describe('Form Inputs reducer', () => {
  const initialState: Inputs = {
    [INPUT_NAMES.NAME]: '',
    [INPUT_NAMES.REGION]: '',
    [INPUT_NAMES.SITE]: '',
    [INPUT_NAMES.LATITUDE]: '',
    [INPUT_NAMES.LONGITUDE]: '',
  };
  it('should handle initial state', () => {
    expect(formInputReducer(undefined, { type: 'unknown' })).toEqual({
      [INPUT_NAMES.NAME]: '',
      [INPUT_NAMES.REGION]: '',
      [INPUT_NAMES.SITE]: '',
      [INPUT_NAMES.LATITUDE]: '',
      [INPUT_NAMES.LONGITUDE]: '',
    });
  });
  it('should handle change Value', () => {
    expect(
      formInputReducer(initialState, changeValue({ key: INPUT_NAMES.NAME, value: 'Fahim' })),
    ).toEqual({
      [INPUT_NAMES.NAME]: 'Fahim',
      [INPUT_NAMES.REGION]: '',
      [INPUT_NAMES.SITE]: '',
      [INPUT_NAMES.LATITUDE]: '',
      [INPUT_NAMES.LONGITUDE]: '',
    });
  });
  it('should handle clear state', () => {
    expect(formInputReducer(initialState, clearState())).toEqual({
      [INPUT_NAMES.NAME]: '',
      [INPUT_NAMES.REGION]: '',
      [INPUT_NAMES.SITE]: '',
      [INPUT_NAMES.LATITUDE]: '',
      [INPUT_NAMES.LONGITUDE]: '',
    });
  });
});
