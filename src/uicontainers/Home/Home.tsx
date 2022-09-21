import React from 'react';

import RegisterForm from 'uicontainers/User/RegisterForm';
import LoginForm from 'uicontainers/User/LoginForm';
import { Tabs } from 'antd';

const Home = () => {
  return (
    <div className="card-container" style={{ width: '60%', marginLeft: '20%' }}>
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

export default Home;
