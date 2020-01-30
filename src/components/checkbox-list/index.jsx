import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import styles from './index.less';

const CheckboxList = ({ title, items, onChange }) => (
  <div>
    <div className="checkboxListTitle">{title}</div>
    {items.map((item, index) => (
      <div className="checkbox">
        <Checkbox
          key={`${name}-${index}`}
          {...item}
          onChange={onChange} />
      </div>
    ))}
  </div>
);

export default CheckboxList;

CheckboxList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  onChange: PropTypes.func
};
