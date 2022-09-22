import React from 'react';

import useHomeLogic from './hooks';
import AuthContainer from 'uicontainers/AuthContainer';
import TableContainer from 'uicontainers/TableContainer';

const Home = () => {
  const { loggedIn } = useHomeLogic();
  return (
    <div className="card-container" style={{ width: '60%', marginLeft: '20%' }}>
      {!loggedIn && <AuthContainer />}
      {loggedIn && <TableContainer />}
    </div>
  );
};

export default Home;
