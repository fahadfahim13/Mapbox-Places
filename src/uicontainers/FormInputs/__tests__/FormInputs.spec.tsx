import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import FormInputs from 'uicontainers/FormInputs';

const renderFormInputsContainer = (): RenderResult => {
  render(
    <Provider store={store}>
      <FormInputs />
    </Provider>,
  );
};

describe('Form inputs container Snapshot', () => {
  test('Renders Form inputs container.', () => {
    renderFormInputsContainer();
    expect(screen).toMatchSnapshot();
  });
});
