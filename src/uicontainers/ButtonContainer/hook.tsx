import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import useAuditLogs from 'uicontainers/AuditLogsContainer/hooks';

import { Props } from '../../components/ActionButton/types';
import { BUTTON_COLORS, BUTTON_TYPES } from 'shared/types';
import { selectFormInputs } from 'store/FormInputs/selectors';
import { clearState } from 'store/FormInputs/actions';
import { addLog } from 'store/AuditLogs/actions';
import { State } from 'store/AuditLogs/types';
import { handleMessage, handleOpenClose } from 'store/Alert/actions';
import { validateFormItems } from './helpers';

const useButton = () => {
  const dispatch = useAppDispatch();
  const { generateAuditLog } = useAuditLogs();
  const formItems = useAppSelector(selectFormInputs);
  const saveAction = () => {
    if (validateFormItems(formItems)) {
      const auditLog: State = {
        log: generateAuditLog(),
        formItem: formItems,
      };
      dispatch(handleOpenClose(false));
      dispatch(handleMessage(''));
      dispatch(addLog(auditLog));
    } else {
      dispatch(handleOpenClose(true));
      dispatch(handleMessage('All inputs are empty'));
    }
  };
  const closeAction = () => {
    dispatch(clearState());
  };
  const BUTTONS: Props[] = [
    {
      value: 'SAVE',
      variant: BUTTON_TYPES.OUTLINED,
      startIcon: <SaveIcon />,
      onClick: () => saveAction(),
    },
    {
      value: 'CANCEL',
      variant: BUTTON_TYPES.OUTLINED,
      startIcon: <CloseIcon />,
      color: BUTTON_COLORS.INHERIT,
      onClick: () => closeAction(),
    },
  ];
  return { BUTTONS };
};

export default useButton;
