import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import Flourish from './Flourish';

const mockStore = configureStore();

test('Flourish component', () => {
  const store = mockStore({
    intl: {
      locale: 'en',
      messages: {},
    },
  });
  const baseUrl = 'http://example.com';

  const component = renderer.create(
    <Provider store={store}>
      <Flourish baseUrl={baseUrl} />
    </Provider>,
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
