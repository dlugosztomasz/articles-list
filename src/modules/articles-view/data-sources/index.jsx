import React, { useState } from 'react';
import { CheckboxList } from '../../../components';
import { availableDataSources } from '../../../config';

const DataSources = () => {
  const [ dataSources, setDataSources ] = useState([]);

  const title = 'Data sources';

  const getItems = () => availableDataSources.map((dataSource) => {
    return {
      name: dataSource,
      checked: dataSources.includes(dataSource)
    };
  });

  const onChange = (event) => {
    event.preventDefault();
    const { target: { value } } = event;
    if (dataSources.includes(value)) {
      const indexOfValue = dataSources.indexOf(value);
      setDataSources(dataSources.slice(indexOfValue));
    } else {
      setDataSources((dataSource) => [ ...dataSource, value ]);
    }
  };

  return (
    <div>
      <CheckboxList
        title={title}
        onChange={onChange}
        items={getItems()} />
    </div>
  );

};

export default DataSources;
