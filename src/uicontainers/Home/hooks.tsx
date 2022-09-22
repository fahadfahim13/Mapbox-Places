import React from 'react';
import { useAppSelector } from 'store/hooks';
import { selectLoginFormInputs } from 'store/LoginFormInputs/selectors';
import { USER_TOKEN } from 'shared/constants';

const useHomeLogic = () => {
  const loginState = useAppSelector(selectLoginFormInputs);
  return {
    loginState,
    loggedIn: loginState.status === 'LoggedIn' || localStorage.getItem(USER_TOKEN),
  };
};

export default useHomeLogic;
