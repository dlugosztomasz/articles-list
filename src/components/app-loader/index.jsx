import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

const AppLoader = ({ title }) => (
  <div className="appLoader">
    {title}
  </div>
);

export default AppLoader;

AppLoader.propTypes = {
  title: PropTypes.string.isRequired
};
