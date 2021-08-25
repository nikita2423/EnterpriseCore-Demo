import { SelectPicker } from "rsuite";
import { useSelector, useDispatch } from "react-redux";

// import selector
import { getSelectedVersion } from "../../model/selector";

// import action
import { onUpdateSelectedVersionAction } from "../../model/action";

// import helper
import { getAllViewVersions } from "../../model/helper";

const onSelectValue = (value, dispatch) => {
  dispatch(onUpdateSelectedVersionAction(value));
};

const SelectVewVersion = () => {
  const selectedversion = useSelector(getSelectedVersion);
  const dispatch = useDispatch();
  return (
    <SelectPicker
      data={getAllViewVersions}
      style={{ width: 224 }}
      defaultValue={selectedversion}
      searchable={false}
      onChange={(value, e) => {
        onSelectValue(value, dispatch);
      }}
    />
  );
};

export default SelectVewVersion;
