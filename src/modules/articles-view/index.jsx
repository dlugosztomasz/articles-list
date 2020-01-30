import React from 'react';
import Articles from './articles';
import DataSources from './data-sources';
import styles from './index.less';

function ArticlesView() {
  return (
    <div className="articlesView">
      <DataSources />
      <Articles />
    </div>
  );
}

export default ArticlesView;
