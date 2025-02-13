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

// Mock the Flourish component
jest.mock('@eeacms/volto-flourish/components/Flourish', () => () => (
  <div data-testid="flourish-component" />
));

test('renders FlourishViewWidget component', () => {
  const mockValue = {
    download: 'http://example.com/flourish/@@download/flourish_zip',
  };

  // Create a renderer and pass the component wrapped in any necessary context providers (if applicable)
  const component = renderer.create(
    <Provider store={store}>
      <FlourishViewWidget value={mockValue} />
    </Provider>,
  );

  // Create the JSON snapshot of the rendered output
  const json = component.toJSON();

  // Match the snapshot
  expect(json).toMatchSnapshot();
});
