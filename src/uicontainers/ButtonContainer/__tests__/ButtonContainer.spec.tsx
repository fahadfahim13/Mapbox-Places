import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import ButtonContainer from 'uicontainers/AuditLogsContainer';

const renderButtonsContainer = (): RenderResult => {
  render(
    <Provider store={store}>
      <ButtonContainer />
    </Provider>,
  );
};

describe('Buttons container Snapshot', () => {
  test('Renders Buttons container.', () => {
    renderButtonsContainer();
    expect(screen).toMatchSnapshot();
  });
});
