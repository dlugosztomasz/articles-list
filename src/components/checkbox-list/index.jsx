import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';

const CheckboxList = ({ title, items, onChange }) => (
  <div>
    {title}
    {items.map((item, index) => (
      <Checkbox
        key={`${name}-${index}`}
        {...item}
        onChange={onChange} />
    ))}
  </div>
);

export default CheckboxList;

CheckboxList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  onChange: PropTypes.func
};
