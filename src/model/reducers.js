import initialState from "./initialState";

import { ADD_POPULATION_OBJECT, STORE_POPULATION_DATA, UPDATE_POPULATION, ON_UPDATE_SELECTED_VERSION } from "./dispatch";

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_POPULATION_DATA: {
      const { yearList, populationObj, sourceData } = action.payload;
      state = {
        ...state,
        yearList: [...yearList],
        populationObj: { ...populationObj },
        source: [...sourceData],
      };
      break;
    }
    case UPDATE_POPULATION: {
      const { year, data } = action.payload;
      state = {
        ...state,
        populationObj: {
          ...state.populationObj,
          [year]: {
            ...state.populationObj[year],
            ...data
          },
        },
      };
      break;
    }
    case ADD_POPULATION_OBJECT: {
      const { year, data } = action.payload;
      state = {
        ...state,
        yearList: [...state.yearList, year],
        populationObj: {
          ...state.populationObj,
          [year]: {
            ...data
          },
        },
      };
      break;
    }
    case ON_UPDATE_SELECTED_VERSION: {
      const { selectedVersion } = action.payload;
      state = {
        ...state,
        selectedVersion,
      };
    }
    default: {
      break;
    }
  }
  return state;
};

export default MainReducer;
