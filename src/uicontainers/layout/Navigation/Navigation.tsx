import React from 'react';
import { Menu } from 'antd';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return <Menu mode="horizontal" className={styles.menuContainer} />;
};

export default Navigation;
