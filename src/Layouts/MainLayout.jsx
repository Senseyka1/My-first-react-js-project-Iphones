import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

import styles from './mainLayout.module.scss'

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
