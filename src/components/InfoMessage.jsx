import React from "react";
import { NoticeBox } from "@dhis2/ui";
import styles from "../App.module.css";

const InfoMessage = () => {
  return (
    <NoticeBox
      className={styles.info}
      title="No data available"
    > The list is currently empty.
    </NoticeBox>
  );
};

export { InfoMessage };
