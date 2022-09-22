import React from 'react';

import useHomeLogic from './hooks';
import AuthContainer from 'uicontainers/AuthContainer';
import TableContainer from 'uicontainers/TableContainer';
import { Result } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  return <Result status="404" title="404" subTitle="Something wrong happened" />;
}

const Home = () => {
  const { loggedIn } = useHomeLogic();
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="card-container" style={{ width: '60%', marginLeft: '20%' }}>
        {!loggedIn && <AuthContainer />}
        {loggedIn && <TableContainer />}
      </div>
    </ErrorBoundary>
  );
};

export default Home;
