import { availableDataSources, alphabeticSortingTypesMapper } from 'config';

const initialState = {
  dataSources: availableDataSources,
  alphabeticSortingType: alphabeticSortingTypesMapper.ASC
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALPHABETIC_SORTING_TYPE':
      return {
        ...state,
        alphabeticSortingType: action.payload
      };
    case 'SET_DATA_SOURCES':
      return {
        ...state,
        dataSources: action.payload
      };
    default:
      return state;
  }
};

export default  articles;
