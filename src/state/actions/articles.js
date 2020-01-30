const setTypeOfAlphabeticSorting = (sortingType) => {
  return {
    type: 'SET_ALPHABETIC_SORTING_TYPE',
    payload: sortingType
  }
};

const setDataSources = (dataSources) => {
  return {
    type: 'SET_DATA_SOURCES',
    payload: dataSources
  }
};

export default {
  setTypeOfAlphabeticSorting,
  setDataSources
};
