import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { alphabeticSortingType } from 'config';
import styles from './index.less';

const isActive = (type, activeType) => (type === 'up' && activeType === alphabeticSortingType.ASC) ||
  (type === 'down' && activeType === alphabeticSortingType.DESC);

const Arrow = ({ type, onClick, value, activeType }) => (
  <div>
    <i onClick={() => onClick(value)} className={classNames(`arrow ${type}`, {
      activeArrow: isActive(type, activeType)
    })} />
  </div>
);

export default Arrow;

Arrow.propTypes = {
  activeType: PropTypes.oneOf(),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
