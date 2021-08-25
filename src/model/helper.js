/**
 * @author Nikita Mittal
 * @email nikitamittal2423@gmail.com
 * @create date 2021-08-24 00:05:51
 * @modify date 2021-08-24 00:05:51
 * @desc [description]
 */

export const API_URL =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

export const normalizePopulationData = (populationList, source) => {
  const yearList = [];
  const populationObj = {};
  const sourceData = [...source];
  populationList.forEach((data) => {
    populationObj[data["ID Year"]] = {
      "ID Nation": {
        value: data["ID Nation"],
        isDisabled: true,
        type: typeof data["ID Nation"],
      },
      Nation: {
        value: data["Nation"],
        isDisabled: true,
        type: typeof data["Nation"],
      },
      "ID Year": {
        value: data["ID Year"],
        isDisabled: true,
        type: typeof data["ID Year"],
      },
      Year: {
        value: data["Year"],
        isDisabled: false,
        type: typeof data["Year"],
      },
      Population: {
        value: data.Population,
        isDisabled: false,
        type: typeof data.Population,
      },
      "Slug Nation": {
        value: data["Slug Nation"],
        isDisabled: true,
        type: typeof data["Slug Nation"],
      },
      type: typeof data,
      isHidden: false,
    };
    yearList.unshift(data["ID Year"]);
  });

  return {
    yearList,
    populationObj,
    sourceData,
  };
};

export const getAllViewVersions = [
  {
    label: "Population View V1",
    value: "population_v1",
  },
  {
    label: "Population View V2",
    value: "population_v2",
  },
  {
    label: "Population View V3",
    value: "population_v3",
  },
];

export const allViewsObj = {
  v1: "population_v1",
  v2: "population_v2",
  v3: "population_v3",
};
