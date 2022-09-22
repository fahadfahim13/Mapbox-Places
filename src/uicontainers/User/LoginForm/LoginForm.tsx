import React from 'react';

import { Button, Form, Input, Spin, Typography } from 'antd';
import useLoginFormInputs from './hook';

const LoginForm = () => {
  const { LOGIN_INPUTS, login, loginStatus, errorMessage } = useLoginFormInputs();

  if (loginStatus === 'Pending') {
    return <Spin />;
  } else {
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
          <Typography.Text type="danger">
            {loginStatus === 'Failed' && JSON.parse(errorMessage?.toString() ?? '')}
          </Typography.Text>
          <br />
          <Button type="primary" onClick={login}>
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  }
};

export default LoginForm;
