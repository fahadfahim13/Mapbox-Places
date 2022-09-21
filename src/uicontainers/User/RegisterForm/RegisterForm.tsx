import React from 'react';

import useRegisterFormInputs from './hook';
import { Button, Form, Input } from 'antd';

const RegisterForm = () => {
  const { REGISTER_INPUTS } = useRegisterFormInputs();

  return (
    <Form>
      {REGISTER_INPUTS.map((inp) => (
        <Form.Item key={inp.id}>
          <Input
            type={inp.type ?? 'text'}
            placeholder={inp.name}
            name={inp.name}
            value={inp.value}
            onChange={inp.onChange}
            key={inp.id}
          />
        </Form.Item>
      ))}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" onClick={(e) => console.log(e)}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
