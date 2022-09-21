import React from 'react';

import InputField from 'components/InputField';
import useFormInputs from './hook';

const FormInputs = () => {
  const { ALL_INPUTS } = useFormInputs();

  return (
    <div>
      {ALL_INPUTS.map((input) => (
        <InputField
          key={input.id}
          {...input}
          name={input.name}
          value={input.value}
          onChange={input.onChange}
        />
      ))}
    </div>
  );
};

export default FormInputs;
