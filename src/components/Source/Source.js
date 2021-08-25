import { Fragment } from "react";
import { useSelector } from "react-redux";
import map from "lodash/map";

// import selector
import { getSourceData } from "../../model/selector";

// import css
import "./Source.css";

const getSourceList = (sourceList) => {
  return map(sourceList, (source, index) => {
    return (
      <Fragment key={index}>
        <div className="source-list-item-header-container">Source Name</div>
        <div className="source-list-item-value-container">
          {source.annotations.source_name}
        </div>
        <div className="source-list-item-header-container">
          Source Description
        </div>
        <div className="source-list-item-value-container">
          {source.annotations.source_description}
        </div>
        <div className="source-list-item-header-container">Dataset Name</div>
        <div className="source-list-item-value-container">
          {source.annotations.dataset_name}
        </div>
        <div className="source-list-item-header-container">Dataset Link</div>
        <a
          href={source.annotations.dataset_link}
          target="__blank"
          className="source-list-item-value-container"
        >
          {source.annotations.dataset_link}
        </a>
      </Fragment>
    );
  });
};

const Source = (props) => {
  const sourceList = useSelector(getSourceData);
  return (
    <div className="source-container">
      <h4>Source</h4>
      <div>{getSourceList(sourceList)}</div>
    </div>
  );
};

export default Source;
