import React, { useState } from "react";
import Head from "next/head";

// import component
import MainPage from "../components/MainPage";

// import css
import "../components/MainPage/MainPage.css";

import "rsuite/lib/styles/themes/dark/index.less";
import ScreenHeader from "../components/ScreenHeader";
import SettingsDrawer from "../components/SettingsDrawer";

const Home = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="main-container">
      <div className="main-body">
        <Head>
          <title>USA Population Statistics</title>
        </Head>
        <ScreenHeader setIsSettingsOpen={setIsSettingsOpen} />
        <MainPage />
        <SettingsDrawer
          setIsSettingsOpen={setIsSettingsOpen}
          isSettingsOpen={isSettingsOpen}
        />
      </div>
    </div>
  );
};

export default Home;
