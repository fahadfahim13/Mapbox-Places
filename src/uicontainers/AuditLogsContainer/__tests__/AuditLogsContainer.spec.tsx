import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import AuditLogsContainer from 'uicontainers/AuditLogsContainer';

const renderAuditLogsContainer = (): RenderResult => {
  render(
    <Provider store={store}>
      <AuditLogsContainer />
    </Provider>,
  );
};

describe('Audit logs container Snapshot', () => {
  test('Renders Audit logs container.', () => {
    renderAuditLogsContainer();
    expect(screen).toMatchSnapshot();
  });
});
