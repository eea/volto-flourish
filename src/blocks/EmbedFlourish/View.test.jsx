import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-intl-redux';
import View from './View';

const mockStore = configureStore();

describe('View', () => {
  it('should render the component', () => {
    const data = {
      with_sources: false,
      flourish_item_url: undefined,
    };

    const store = mockStore({
      userSession: { token: '1234' },
      intl: {
        locale: 'en',
        messages: {},
      },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <View data={data} />
        </MemoryRouter>
      </Provider>,
    );
    expect(container.querySelector('.embed-flourish')).toBeInTheDocument();
  });
});
