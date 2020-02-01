import React from 'react';
import { shallow, mount } from 'enzyme';
import jest from 'jest-mock';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import actions from 'state/actions';
import reducer from 'state/reducers';
import Sorting from '../index';

describe('Sorting Container', () => {

  const mockStore = createStore(reducer, { articles: { alphabeticSortingType: 'asc' } });
  mockStore.dispatch = jest.fn();

  it('should render correctly', () => {
    const component = shallow(
      <Provider store={mockStore}>
        <Sorting />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('dispatch correct action during change', () => {
    const component = mount(
      <Provider store={mockStore}>
        <Sorting />
      </Provider>
    );
    component.find('i')
      .first()
      .simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(actions.articlesActions.setTypeOfAlphabeticSorting('asc'));
  });
});

