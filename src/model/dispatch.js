export const STORE_POPULATION_DATA = "STORE_POPULATION_DATA";
export const UPDATE_POPULATION = "UPDATE_POPULATION";
export const ADD_POPULATION_OBJECT = "ADD_POPULATION_OBJECT";
export const ON_UPDATE_SELECTED_VERSION = "ON_UPDATE_SELECTED_VERSION";

export const dispatchPopulationData = (yearList, populationObj, sourceData) => {
  return {
    type: STORE_POPULATION_DATA,
    payload: {
      yearList,
      populationObj,
      sourceData,
    },
  };
};

export const dispatchSelectedVersion = (selectedVersion) => {
  return {
    type: ON_UPDATE_SELECTED_VERSION,
    payload: {
      selectedVersion,
    },
  };
};

export const dispatchUpdatePopulation = (year, data) => {
  return {
    type: UPDATE_POPULATION,
    payload: {
      year,
      data,
    },
  };
};

export const dispatchAddObject = (year, data) => {
  return {
    type: ADD_POPULATION_OBJECT,
    payload: {
      year,
      data,
    },
  };
};
