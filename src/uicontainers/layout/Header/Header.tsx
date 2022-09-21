import React from 'react';
import { Layout } from 'antd';

import styles from './Header.module.css';

export const Header = () => {
  return <Layout.Header className={styles.headerStyle} />;
};

export default Header;
