export const getPopulationChartData = (state, props) => {
  const { yearList, populationObj } = state.MainReducer;

  const lineChartList = [];
  Object.keys(populationObj).forEach((yearKey) => {
    const populationData = populationObj[yearKey];
    if (!populationData.isHidden) {
      lineChartList.push({
        name: populationData.Year.value,
        population: Math.round(
          Math.log10(populationData.Population.value) * 10
        ),
        actualPopulation: populationData.Population.value,
      });
    }
  });
  return lineChartList;
};

export const getPopulationTableData = (state, props) => {
  const { yearList, populationObj } = state.MainReducer;
  const tableList = [];
  yearList.forEach((year) => {
    const populationData = populationObj[year];
    if (!populationData.isDisabled) {
      tableList.push({
        year: populationData.Year.value,
        population: populationData.Population.value,
      });
    }
  });
  return tableList;
};

export const getSelectedVersion = (state, props) => {
  const { selectedVersion } = state.MainReducer;
  return selectedVersion;
};

export const getSourceData = (state, props) => {
  const { source } = state.MainReducer;
  return source;
};

export const dataSelector = ({ MainReducer: { populationObj = {} } = {} }) =>
  populationObj;

export const yearListSelector = ({ MainReducer: { yearList = [] } = {} }) =>
  yearList;
