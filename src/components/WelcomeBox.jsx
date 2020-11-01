import React, { Component } from "react";
import { NoticeBox, CircularLoader } from "@dhis2/ui";
import styles from "../App.module.css";
import { useDataQuery } from "@dhis2/app-runtime";


const WelcomeBox = (props) => {
  const query = {
    Me: {
      resource: "me",
    }
  }

  const { loading, error, data } = useDataQuery(query);

  if (error) {
    return <p>{`ERROR: ${error.message}`}</p>;
  }
  if (loading) {
    return <CircularLoader />;
  }

  return (



    <NoticeBox
      className={styles.notice}
      dataTest="dhis2-uicore-noticebox"
      title={`Welcome, ${data.Me.name}!`}
    >
      You have <strong>{props.taskCount}</strong> tasks left to complete {props.dayDescription}!
        {/* //tomorrow //next week //next month //during the periode chosen */}

    </NoticeBox >
  );
}


export { WelcomeBox };
