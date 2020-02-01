import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import allActions from 'state/actions';
import { Arrow } from 'components';
import { arrowTypes, alphabeticSortingTypesMapper } from 'config';
import styles from './index.less';

const SORTING_TITLE = 'Sort by Date';

const Sorting = () => {
  const dispatch = useDispatch();

  const onClick = useCallback((value) => {
    const { setTypeOfAlphabeticSorting } = allActions.articlesActions;
    dispatch(setTypeOfAlphabeticSorting(value));
  }, []);

  return (
    <div className="sortingComponent">
      <div className="sortingTitle">{SORTING_TITLE}</div>
      <div className="sortingArrows">
        <Arrow
          type={arrowTypes.UP}
          value={alphabeticSortingTypesMapper.ASC}
          onClick={onClick} />
        <Arrow
          type={arrowTypes.DOWN}
          value={alphabeticSortingTypesMapper.DESC}
          onClick={onClick} />
      </div>
    </div>
  );
};

export default Sorting;
