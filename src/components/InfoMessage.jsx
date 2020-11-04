import React from "react";
import { NoticeBox } from "@dhis2/ui";
import styles from "../App.module.css";

const InfoMessage = () => {
  return (
    <NoticeBox
      className={styles.info}
      title="There is currently no data available"
    >
      Please try again!
    </NoticeBox>
  );
};

export { InfoMessage };
