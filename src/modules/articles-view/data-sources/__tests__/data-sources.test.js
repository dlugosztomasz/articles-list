import React from 'react';
import {shallow, mount} from 'enzyme';
import jest from 'jest-mock';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import actions from 'state/actions';
import reducer from 'state/reducers';
import { availableDataSources } from 'config';
import DataSources from '../index';

describe('Data Sources Container', () => {

  const mockStore = createStore(reducer, { articles: { dataSources: availableDataSources } });
  mockStore.dispatch = jest.fn();

  it('should render correctly', () => {
    const component = shallow(
      <Provider store={mockStore}>
        <DataSources />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('dispatch correct action during change', () => {
    const component = mount(
      <Provider store={mockStore}>
        <DataSources />
      </Provider>
    );
    component.find('input').first().simulate('change');
    expect(mockStore.dispatch).toHaveBeenCalledWith(actions.articlesActions.setDataSources([ 'Sport' ]));
  });
});
