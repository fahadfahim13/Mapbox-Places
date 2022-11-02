import React from 'react';

import { Result } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import MapContainer from '../MapContainer';

function ErrorFallback() {
  return <Result status="404" title="404" subTitle="Something wrong happened" />;
}

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="card-container" style={{ width: '60%', marginLeft: '20%' }}>
        <MapContainer />
      </div>
    </ErrorBoundary>
  );
};

export default Home;
