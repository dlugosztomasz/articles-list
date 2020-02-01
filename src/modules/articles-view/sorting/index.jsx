import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from 'state/actions';
import { Arrow } from 'components';
import { arrowTypes, alphabeticSortingType } from 'config';
import styles from './index.less';

const SORTING_TITLE = 'Sort by Date';

const Sorting = () => {
  const { alphabeticSortingType: alphabeticSortingTypeState } = useSelector((state) => state.articles);
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
          activeType={alphabeticSortingTypeState}
          value={alphabeticSortingType.ASC}
          onClick={onClick} />
        <Arrow
          type={arrowTypes.DOWN}
          activeType={alphabeticSortingTypeState}
          value={alphabeticSortingType.DESC}
          onClick={onClick} />
      </div>
    </div>
  );
};

export default Sorting;
