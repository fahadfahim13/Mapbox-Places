import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { INPUT_NAMES } from './types';
import { InputChangeAction, InputTypes } from 'store/FormInputs/types';
import { Props } from 'components/InputField/types';

import { changeValue } from 'store/FormInputs/actions';
import { selectFormInputs } from 'store/FormInputs/selectors';

const useFormInputs = () => {
  const dispatch = useAppDispatch();
  const formItems = useAppSelector(selectFormInputs);
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: InputTypes,
  ) => {
    const payload: InputChangeAction = {
      key,
      value: e.target.value,
    };
    dispatch(changeValue(payload));
  };
  const ALL_INPUTS: Props[] = [
    {
      id: INPUT_NAMES.NAME,
      name: INPUT_NAMES.NAME,
      label: 'Name',
      value: formItems[INPUT_NAMES.NAME],
      width: '100%',
      onChange: (e) => handleChange(e, INPUT_NAMES.NAME),
    },
    {
      id: INPUT_NAMES.REGION,
      name: INPUT_NAMES.REGION,
      label: 'Jurisdiction/City/Region',
      width: '100%',
      multiline: true,
      maxRows: 2,
      value: formItems[INPUT_NAMES.REGION],
      onChange: (e) => handleChange(e, INPUT_NAMES.REGION),
    },
    {
      id: INPUT_NAMES.SITE,
      name: INPUT_NAMES.SITE,
      label: 'Site Description',
      value: formItems[INPUT_NAMES.SITE],
      onChange: (e) => handleChange(e, INPUT_NAMES.SITE),
      width: '100%',
      multiline: true,
      maxRows: 2,
    },
    {
      id: INPUT_NAMES.LATITUDE,
      name: INPUT_NAMES.LATITUDE,
      label: 'Latitude',
      type: 'number',
      value: formItems[INPUT_NAMES.LATITUDE],
      onChange: (e) => handleChange(e, INPUT_NAMES.LATITUDE),
      width: '30%',
    },
    {
      id: INPUT_NAMES.LONGITUDE,
      name: INPUT_NAMES.LONGITUDE,
      label: 'Longitude',
      type: 'number',
      value: formItems[INPUT_NAMES.LONGITUDE],
      onChange: (e) => handleChange(e, INPUT_NAMES.LONGITUDE),
      width: '30%',
    },
  ];
  return { ALL_INPUTS };
};

export default useFormInputs;
