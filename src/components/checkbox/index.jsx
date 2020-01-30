import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, checked, onChange }) => (
  <div>
    <input
      type="checkbox"
      value={name}
      checked={checked}
      onClick={onChange}
    />
      {name}
  </div>
);

export default Checkbox;

Checkbox.propTypes = {
  checked: PropTypes.bool,
  item: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func
};
