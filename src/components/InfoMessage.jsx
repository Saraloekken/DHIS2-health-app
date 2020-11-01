import React from "react";
import { NoticeBox } from "@dhis2/ui";
import styles from "../App.module.css";

const InfoMessage = () => {
  return (
    <NoticeBox
      className={styles.info}
      dataTest="dhis2-uicore-noticebox"
      title="There is currently no data available"
    >
      Please try another time frame!
    </NoticeBox>
  );
};

export { InfoMessage };
