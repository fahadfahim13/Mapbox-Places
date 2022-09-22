import React from 'react';
import { Tabs } from 'antd';
import LoginForm from '../User/LoginForm';
import RegisterForm from '../User/RegisterForm';

const AuthContainer = () => {
  return (
    <div>
      <Tabs type="card">
        <Tabs.TabPane tab="Login" key="login">
          <LoginForm />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Register" key="register">
          <RegisterForm />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default AuthContainer;
