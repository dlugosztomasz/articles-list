import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, checked, onChange }) => (
  <div>
    <input
      type="checkbox"
      value={name}
      name={name}
      checked={checked}
      onChange={onChange}
    />
      {name}
  </div>
);

export default Checkbox;

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func
};
