import React from 'react';

import useRegisterFormInputs from './hook';
import { Button, Form, Input, Typography } from 'antd';

const RegisterForm = () => {
  const { REGISTER_INPUTS, register, registerState } = useRegisterFormInputs();

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
        <Typography.Text type="danger">
          {registerState.status === 'Failed' && (registerState.errorMessage?.toString() ?? '')}
        </Typography.Text>
        <br />
        <Typography.Link type="success">
          {registerState.status === 'Registered' && 'Successfully created account. Please login.'}
        </Typography.Link>
        <br />
        <Button type="primary" onClick={register}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
