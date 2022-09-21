import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { REGISTER_INPUT_NAMES } from './types';
import { InputChangeAction, InputTypes } from 'store/RegisterFormInputs/types';
import { Props } from 'components/InputField/types';

import { changeRegisterFormValue } from 'store/RegisterFormInputs/actions';
import { selectRegisterFormInputs } from 'store/RegisterFormInputs/selectors';

const useRegisterFormInputs = () => {
  const dispatch = useAppDispatch();
  const registerFormItems = useAppSelector(selectRegisterFormInputs);
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: InputTypes,
  ) => {
    const payload: InputChangeAction = {
      key,
      value: e.target.value,
    };
    dispatch(changeRegisterFormValue(payload));
  };

  const REGISTER_INPUTS: Props[] = [
    {
      id: REGISTER_INPUT_NAMES.NAME,
      name: REGISTER_INPUT_NAMES.NAME,
      label: 'Name',
      value: registerFormItems[REGISTER_INPUT_NAMES.NAME],
      width: '100%',
      onChange: (e) => handleChange(e, REGISTER_INPUT_NAMES.NAME),
    },
    {
      id: REGISTER_INPUT_NAMES.EMAIL,
      name: REGISTER_INPUT_NAMES.EMAIL,
      label: 'Email',
      value: registerFormItems[REGISTER_INPUT_NAMES.EMAIL],
      width: '100%',
      type: REGISTER_INPUT_NAMES.EMAIL,
      onChange: (e) => handleChange(e, REGISTER_INPUT_NAMES.EMAIL),
    },
    {
      id: REGISTER_INPUT_NAMES.PASSWORD,
      name: REGISTER_INPUT_NAMES.PASSWORD,
      label: 'Password',
      value: registerFormItems[REGISTER_INPUT_NAMES.PASSWORD],
      width: '100%',
      type: REGISTER_INPUT_NAMES.PASSWORD,
      onChange: (e) => handleChange(e, REGISTER_INPUT_NAMES.PASSWORD),
    },
  ];

  const onFinish = (values: Record<string, string>) => {
    console.log('Success:', values);
  };
  return { REGISTER_INPUTS, onFinish };
};

export default useRegisterFormInputs;
