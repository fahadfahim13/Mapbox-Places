import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { InputChangeAction, InputTypes } from 'store/LoginFormInputs/types';

import { Props } from 'components/InputField/types';

import { selectLoginFormInputs } from 'store/LoginFormInputs/selectors';
import { changeLoginFormValue, loginAsync } from 'store/LoginFormInputs/actions';
import { REGISTER_INPUT_NAMES } from './types';

const useLoginFormInputs = () => {
  const dispatch = useAppDispatch();
  const loginFormItems = useAppSelector(selectLoginFormInputs);
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: InputTypes,
  ) => {
    const payload: InputChangeAction = {
      key,
      value: e.target.value,
    };
    dispatch(changeLoginFormValue(payload));
  };

  const LOGIN_INPUTS: Props[] = [
    {
      id: REGISTER_INPUT_NAMES.EMAIL,
      name: REGISTER_INPUT_NAMES.EMAIL,
      label: 'Email',
      value: loginFormItems[REGISTER_INPUT_NAMES.EMAIL],
      width: '100%',
      type: REGISTER_INPUT_NAMES.EMAIL,
      onChange: (e) => handleChange(e, REGISTER_INPUT_NAMES.EMAIL),
    },
    {
      id: REGISTER_INPUT_NAMES.PASSWORD,
      name: REGISTER_INPUT_NAMES.PASSWORD,
      label: 'Password',
      value: loginFormItems[REGISTER_INPUT_NAMES.PASSWORD],
      width: '100%',
      type: REGISTER_INPUT_NAMES.PASSWORD,
      onChange: (e) => handleChange(e, REGISTER_INPUT_NAMES.PASSWORD),
    },
  ];

  const login = () => {
    dispatch(loginAsync({ ...loginFormItems }));
  };

  return {
    LOGIN_INPUTS,
    login,
    loginStatus: loginFormItems.status,
    errorMessage: loginFormItems.errorMessage,
  };
};

export default useLoginFormInputs;
