import { addLog } from '../actions';
import auditLogsReducer from '../reducer';
import { State } from '../types';
import { INPUT_NAMES } from 'uicontainers/FormInputs/types';

describe('Audit Logs reducer', () => {
  const initialState: State[] = [];
  const date = new Date().toLocaleString();
  const newLog = {
    log: `Created By user at ${date}`,
    formItem: {
      [INPUT_NAMES.NAME]: 'Fahim',
      [INPUT_NAMES.REGION]: 'Dhaka',
      [INPUT_NAMES.SITE]: 'Rampura',
      [INPUT_NAMES.LATITUDE]: '',
      [INPUT_NAMES.LONGITUDE]: '',
    },
  };
  it('should handle initial state', () => {
    expect(auditLogsReducer(undefined, { type: 'unknown' })).toEqual([]);
  });
  it('should handle add new log', () => {
    expect(auditLogsReducer(initialState, addLog(newLog))).toEqual([
      {
        log: `Created By user at ${date}`,
        formItem: {
          [INPUT_NAMES.NAME]: 'Fahim',
          [INPUT_NAMES.REGION]: 'Dhaka',
          [INPUT_NAMES.SITE]: 'Rampura',
          [INPUT_NAMES.LATITUDE]: '',
          [INPUT_NAMES.LONGITUDE]: '',
        },
      },
    ]);
  });
});
