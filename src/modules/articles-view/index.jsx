import React from 'react';
import Articles from './articles';
import DataSources from './data-sources';
import Sorting from './sorting';
import styles from './index.less';

function ArticlesView() {
  return (
    <div className="articlesView">
      <DataSources />
      <div className="detailsView">
        <Sorting />
        <Articles />
      </div>
    </div>
  );
}

export default ArticlesView;
