import React from 'react';
import {shallow} from 'enzyme';
import jest from 'jest-mock';
import Checkbox from '../index';

describe('Checkbox Component', () => {

  const defaultProps = {
    checked: true,
    name: 'Newspaper',
    onChange: jest.fn()
  };

  it('should render correctly', () => {
    const component = shallow(<Checkbox {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });

  it('has an appropriate label', () => {
    const component = shallow(<Checkbox {...defaultProps} />);
    expect(component.find('input').props().name).toEqual(defaultProps.name);
  });

  it('run the function on change', () => {
    const component = shallow(<Checkbox {...defaultProps} />);
    expect(defaultProps.onChange).not.toHaveBeenCalled();
    component.find('input').simulate('change', { target: { checked: true } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });
});
