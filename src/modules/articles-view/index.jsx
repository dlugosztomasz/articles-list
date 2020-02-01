import React from 'react';
import Articles from './articles';
import DataSources from './data-sources';
import Sorting from './sorting';
import styles from './index.less';

function ArticlesView() {
  return (
    <div className="articlesView">
      <DataSources />
      <Sorting />
      <Articles />
    </div>
  );
}

export default ArticlesView;
