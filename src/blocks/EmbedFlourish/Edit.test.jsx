import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-intl-redux';
import Edit from './Edit';

const mockStore = configureStore();

describe('Edit', () => {
  it('should render the component with correct mode and child components', () => {
    const data = {
      with_sources: false,
      with_notes: false,
      with_share: false,
      with_enlarge: false,
      with_more_info: false,
      flourish_item_url: undefined,
    };

    const block = { blockId: '1' };
    const selected = false;
    const onChangeBlock = jest.fn();

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
          <Edit
            block={block}
            data={data}
            selected={selected}
            onChangeBlock={onChangeBlock}
          />
        </MemoryRouter>
      </Provider>,
    );

    expect(container.querySelector('.embed-flourish')).toBeInTheDocument();
  });
});
