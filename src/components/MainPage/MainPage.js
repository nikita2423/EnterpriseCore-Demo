import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// import actions
import { storePopulationDataAction } from "../../model/action";

// import selector
import { getSelectedVersion } from "../../model/selector";

// import css
import "./MainPage.css";

// import components
import PopulationViewV1 from "../PopulationViewV1";
import PopulationViewV2 from "../PopulationViewV2";
import PopulationViewV3 from "../PopulationViewV3";
import { allViewsObj, API_URL } from "../../model/helper";
import Source from "../Source";

const getView = (selectedVersion) => {
  switch (selectedVersion) {
    case allViewsObj.v1:
      return <PopulationViewV1 />;
    case allViewsObj.v2:
      return <PopulationViewV2 />;
    case allViewsObj.v3:
      return <PopulationViewV3 />;
    default:
      return <PopulationViewV1 />;
  }
};

const MainPage = () => {
  const dispatch = useDispatch();
  const selectedVersion = useSelector(getSelectedVersion);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        if (response.data && response.data.data && response.data.source) {
          dispatch(
            storePopulationDataAction(response.data.data, response.data.source)
          );
        }
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="main-page-container">
      {getView(selectedVersion)}
      <Source />
    </div>
  );
};

export default MainPage;
