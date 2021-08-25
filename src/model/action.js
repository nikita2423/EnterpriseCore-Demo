/**
 * @author Nikita Mittal
 * @email nikitamittal2423@gmail.com
 * @create date 2021-08-24 00:03:36
 * @modify date 2021-08-24 00:03:36
 * @desc [description]
 */

import { normalizePopulationData } from "./helper";

import { dispatchPopulationData, dispatchSelectedVersion, dispatchUpdatePopulation } from "./dispatch";
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
