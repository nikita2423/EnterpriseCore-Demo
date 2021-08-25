import React from "react";
import Image from "next/image";

import "./ScreenHeader.css";
import { Button } from "rsuite";
import SelectVewVersion from "../SelectViewVersion";

const ScreenHeader = ({ setIsSettingsOpen }) => {
  return (
    <div className="screen-heading">
      <h3 className="screen-heading-text">USA Population Statistics</h3>
      <div className="settings-dropdown-container">
        <SelectVewVersion />
      </div>

      <Button
        onClick={() => setIsSettingsOpen(true)}
        className="settings-button"
      >
        <Image
          alt="settings-panel"
          src="/icons8-settings.svg"
          height="35px"
          width="42px"
        />
      </Button>
    </div>
  );
};

export default ScreenHeader;
