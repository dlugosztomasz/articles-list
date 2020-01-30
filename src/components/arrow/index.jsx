import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

const Arrow = ({ type, onClick, value }) => (
  <div onClick={() => onClick(value)}>
    <i className={`arrow ${type}`} />
  </div>
);

export default Arrow;

Arrow.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
