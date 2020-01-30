import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../state/actions';
import { CheckboxList } from '../../../components';
import { availableDataSources } from '../../../config';
import styles from './index.less';

const DataSources = () => {
  const { dataSources } = useSelector(state => state.articles);
  const dispatch = useDispatch();
  const title = 'Data sources';

  const items = useMemo(() => availableDataSources.map((dataSource) => {
    return {
      name: dataSource,
      checked: dataSources.includes(dataSource)
    };
  }), [ dataSources, availableDataSources ]);

  const onChange = useCallback((event) => {
    const { target: { value } } = event;
    const { setDataSources } = allActions.articlesActions;
    if (dataSources.includes(value)) {
      const newDataSource = dataSources.filter(source => source !== value);
      dispatch(setDataSources(newDataSource));
    } else {
      const newDataSource = [ ...dataSources, value ];
      dispatch(setDataSources(newDataSource));
    }
  }, [ dataSources ]);

  return (
    <div className="dataSources">
      <CheckboxList
        title={title}
        onChange={onChange}
        items={items} />
    </div>
  );

};

export default DataSources;
