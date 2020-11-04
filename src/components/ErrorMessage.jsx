import React from "react";
import { NoticeBox } from "@dhis2/ui";
import styles from "../App.module.css";

const ErrorMessage = () => {
  return (
    <NoticeBox
      className={styles.error}
      error
      title="Oops! Something just happened"
    >
      Try to refresh the page
    </NoticeBox>
  );
};

export { ErrorMessage };
