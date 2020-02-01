import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import styles from './index.less';

const CheckboxList = ({ title, items, onChange }) => (
  <div>
    <div className="checkboxListTitle">{title}</div>
    <div className="checkboxContainer">
    {items.map((item, index) => (
      <div
        key={`${name}-${index}`}
        className="checkbox">
        <Checkbox
          {...item}
          onChange={onChange} />
      </div>
    ))}
    </div>
  </div>
);

export default CheckboxList;

CheckboxList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  onChange: PropTypes.func
};
