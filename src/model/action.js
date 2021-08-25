import { normalizePopulationData } from "./helper";

import {
  dispatchPopulationData,
  dispatchSelectedVersion,
  dispatchUpdatePopulation,
} from "./dispatch";
export const storePopulationDataAction = (population, source) => {
  return (dispatch, getState) => {
    const { yearList, populationObj, sourceData } = normalizePopulationData(
      population,
      source
    );

    dispatch(dispatchPopulationData(yearList, populationObj, sourceData));
  };
};

export const onUpdateSelectedVersionAction = (selectedVersion) => {
  return (dispatch, getState) => {
    dispatch(dispatchSelectedVersion(selectedVersion));
  };
};
