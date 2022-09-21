import React from 'react';

import { Button, Form, Input } from 'antd';
import useLoginFormInputs from './hook';

const LoginForm = () => {
  const { LOGIN_INPUTS } = useLoginFormInputs();

  return (
    <Form>
      {LOGIN_INPUTS.map((inp) => (
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
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
