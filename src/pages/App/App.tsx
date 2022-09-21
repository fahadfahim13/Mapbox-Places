import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'shared/routes/constants';

import Home from 'uicontainers/Home/Home';
import Content from 'uicontainers/layout/Content';
import Header from 'uicontainers/layout/Header';

import styles from './App.module.css';

const App = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <Routes>
          <Route path={ROUTES.PATHS.ROOT} element={<Home />} />
          <Route path={ROUTES.PATHS.HOME} element={<Home />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
