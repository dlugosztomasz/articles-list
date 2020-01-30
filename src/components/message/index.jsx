import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.less';

const Message = ({ title, error }) => (
  <div className={classNames('message', {
    'error': error
  })}>
    {title}
  </div>
);

export default Message;

Message.propTypes = {
  title: PropTypes.string.isRequired,
  error: PropTypes.bool
};
