import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-intl-redux';
import configureStore from 'redux-mock-store';
import FlourishViewWidget from './FlourishViewWidget';

const mockStore = configureStore();

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

jest.mock('@eeacms/volto-flourish/components/Flourish', () => () => (
  <div data-testid="flourish-component" />
));

test('renders FlourishViewWidget component', () => {
  const mockValue = {
    download: 'http://example.com/flourish/@@download/flourish_zip',
  };

  const component = renderer.create(
    <Provider store={store}>
      <FlourishViewWidget value={mockValue} />
    </Provider>,
  );

  const json = component.toJSON();

  expect(json).toMatchSnapshot();
});
